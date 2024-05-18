import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { DonBanHangRepository } from './don-ban-hang.repository';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { UpdateDonBanHangDto } from './dto/update-don-ban-hang.dto';
import { EmployeeService } from '../employee/employee.service';
import { CustomerService } from '../customer/customer.service';
import { GetDonBanHangDto } from './dto/get-don-ban-hang.dto';
import {
  DELIVERY_STATUS,
  DeliveryStatusType,
  ORDER,
  OrderType,
} from 'src/constants';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ProductService } from '../product/product.service';
import { DieuKhoanService } from '../dieu-khoan/dieu-khoan.service';
import { CktmService } from '../cktm/cktm.service';
import { Product } from '../product/entities/product.entity';
import { DonBanHang } from './entities/don-ban-hang.entity';

@Injectable()
export class DonBanHangService {
  constructor(
    private readonly donBanHangRepository: DonBanHangRepository,
    private readonly employeeService: EmployeeService,
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
    private readonly dieuKhoanService: DieuKhoanService,
    private readonly cktmService: CktmService,
  ) {}

  async create(createDonBanHangDto: CreateDonBanHangDto) {
    const productsOfDonBanHang = await Promise.all(
      createDonBanHangDto.products.map(async (each) => {
        const product = await this.productService.findOne(each.productId);
        return {
          product: product,
          count: each.count,
          price: product.priceDelivery,
        };
      }),
    );
    const salesperson = await this.employeeService.findOneSalesperson(
      createDonBanHangDto.salespersonId,
    );
    const customer = await this.customerService.findOne(
      createDonBanHangDto.customerId,
    );

    for (const product of productsOfDonBanHang) {
      if (product.product.category < product.count) {
        throw new ConflictException(
          `Product ${product.product.id} out of stock`,
        );
      }
    }

    for (const product of productsOfDonBanHang) {
      await this.productService.orderProduct(product.product.id, product.count);
    }

    return this.donBanHangRepository.create(
      createDonBanHangDto,
      salesperson,
      customer,
      productsOfDonBanHang,
    );
  }

  async createRaw(createDonBanHangDto: CreateDonBanHangDto) {
    const productsOfDonBanHang = await Promise.all(
      createDonBanHangDto.products.map(async (each) => {
        const product = await this.productService.findOne(each.productId);
        return {
          product: product,
          count: each.count,
          price: product.priceDelivery,
        };
      }),
    );
    const salesperson = await this.employeeService.findOneSalesperson(
      createDonBanHangDto.salespersonId,
    );
    const customer = await this.customerService.findOne(
      createDonBanHangDto.customerId,
    );

    for (const product of productsOfDonBanHang) {
      if (product.product.category < product.count) {
        throw new ConflictException(
          `Product ${product.product.id} out of stock`,
        );
      }
    }

    return this.donBanHangRepository.createRaw(
      createDonBanHangDto,
      salesperson,
      customer,
      productsOfDonBanHang,
    );
  }

  async findAll(query: GetDonBanHangDto) {
    let sortOptions: [string, OrderType][] = [];
    if (query.sorts) {
      sortOptions = query.sorts;
    } else {
      sortOptions = [['saleDate', ORDER.DESC]];
    }
    sortOptions.forEach((sortOption) => {
      if (
        ![
          'id',
          'saleDate',
          'deliveryTerm',
          'paymentStatus',
          'deliveryStatus',
          'documentStatus',
        ].includes(sortOption[0])
      ) {
        throw new UnprocessableEntityException(
          'Key of sort options is not valid',
        );
      }
    });
    const donBanHangs = await this.donBanHangRepository.findAllNoPage(
      // query.pageSize,
      // query.pageSize * (query.currentPage - 1),
      sortOptions,
    );
    // const pagination = new PaginationDto(
    //   query.currentPage,
    //   query.pageSize,
    //   Math.ceil(donBanHangs[1] / query.pageSize),
    //   donBanHangs[1],
    // );
    const pagination = new PaginationDto(1, 9999, 1, donBanHangs[1]);
    return { data: donBanHangs[0], pagination: pagination };
  }

  findByDeliveryStatus(deliveryStatus: DeliveryStatusType[]) {
    return this.donBanHangRepository.findByDeliveryStatus(deliveryStatus);
  }

  async findByIds(ids: number[]) {
    const donBanHangs = await this.donBanHangRepository.findByIds(ids);
    if (donBanHangs.length !== ids.length) {
      throw new NotFoundException('Some don ban hang not found');
    }
    return donBanHangs;
  }

  async findOne(id: number) {
    const donBanHang = await this.donBanHangRepository.findOne(id);
    if (!donBanHang) {
      throw new NotFoundException('Don ban hang not found');
    }
    return donBanHang;
  }

  async deliverDonBanHang(
    donBanHang: DonBanHang,
    product: Product,
    count: number,
  ) {
    const productOfDonBanHang =
      await this.donBanHangRepository.findProductOfDonBanHang(
        donBanHang,
        product,
      );

    if (!productOfDonBanHang) {
      throw new ConflictException(
        `Product ${product.id} not found in don ban hang ${donBanHang.id}`,
      );
    }

    if (count > productOfDonBanHang.count - productOfDonBanHang.delivered) {
      throw new ConflictException('Count of product in delivery is not valid');
    }

    return this.donBanHangRepository.deliverDonBanHang(
      productOfDonBanHang.id,
      productOfDonBanHang.delivered + count,
    );
  }

  async checkAndUpdateDeliveryStatus(donBanHangId: number) {
    const donBanHang = await this.findOne(donBanHangId);
    const productOfDonBanHangs =
      await this.donBanHangRepository.findProductsOfDonBanHang(donBanHang);
    let delivered = 0;
    let count = 0;
    if (productOfDonBanHangs.length === 0) {
      return;
    }
    for (const productOfDonBanHang of productOfDonBanHangs) {
      delivered += productOfDonBanHang.delivered;
      count += productOfDonBanHang.count;
    }
    if (delivered === count) {
      return this.donBanHangRepository.updateDeliveryStatus(
        donBanHangId,
        DELIVERY_STATUS.DELIVERED,
      );
    } else if (delivered === 0) {
      return this.donBanHangRepository.updateDeliveryStatus(
        donBanHangId,
        DELIVERY_STATUS.NOT_DELIVERED,
      );
    } else {
      return this.donBanHangRepository.updateDeliveryStatus(
        donBanHangId,
        DELIVERY_STATUS.DELIVERING,
      );
    }
  }

  update(id: number, updateDonBanHangDto: UpdateDonBanHangDto) {
    return `This action updates a #${id} donBanHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donBanHang`;
  }
}
