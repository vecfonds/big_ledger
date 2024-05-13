import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import {
  DonBanHang,
  ProductOfDonBanHang,
} from './entities/don-ban-hang.entity';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { Salesperson } from '../employee/entities/employee.entity';
import { Customer } from '../customer/entities/customer.entity';
import {
  DeliveryStatusType,
  OrderType,
  STOCK_STATUS,
  StockStatusType,
} from 'src/constants';
import { Product } from '../product/entities/product.entity';
import { DieuKhoan } from '../dieu-khoan/entities/dieu-khoan.entity';
import { Cktm } from '../cktm/entities/cktm.entity';

@Injectable()
export class DonBanHangRepository {
  private readonly donBanHangRepository: Repository<DonBanHang>;
  private readonly productOfDonBanHangRepository: Repository<ProductOfDonBanHang>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.donBanHangRepository = this.dataSource.getRepository(DonBanHang);
    this.productOfDonBanHangRepository =
      this.dataSource.getRepository(ProductOfDonBanHang);
  }

  create(
    createDonBanHangDto: CreateDonBanHangDto,
    salesperson: Salesperson,
    customer: Customer,
    dieuKhoan: DieuKhoan,
    cktm: Cktm,
    products: Product[],
    counts: number[],
    stockStatus: StockStatusType = STOCK_STATUS.IN_STOCK,
  ) {
    const newDonBanHang = this.donBanHangRepository.create({
      ...createDonBanHangDto,
      salesperson: salesperson,
      customer: customer,
      dieuKhoan: dieuKhoan,
      cktm: cktm,
    });
    return this.dataSource.transaction(async (manager) => {
      const donBanHang = await manager.save(newDonBanHang);
      const productOfDonBanHangs = products.map((product, index) => {
        return this.productOfDonBanHangRepository.create({
          donBanHang: donBanHang,
          product: product,
          price: product.priceDelivery,
          count: counts[index],
        });
      });
      await manager.save(productOfDonBanHangs);
      return donBanHang;
    });
  }

  findAll(take: number, skip: number, sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.donBanHangRepository.findAndCount({
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: {
          product: {
            productGroup: true,
          },
        },
        ctban: {
          productOfCtban: {
            product: true,
          },
        },
      },
      order: sortsObject,
      take: take,
      skip: skip,
    });
  }

  findAllNoPage(sorts: [string, OrderType][]) {
    let sortsObject: { [key: string]: OrderType } = {};
    sorts.forEach(([key, value]) => {
      sortsObject[key] = value;
    });
    return this.donBanHangRepository.findAndCount({
      relations: {
        salesperson: true,
        customer: true,
        dieuKhoan: true,
        cktm: true,
        productOfDonBanHangs: {
          product: {
            productGroup: true,
          },
        },
        ctban: {
          productOfCtban: {
            product: true,
          },
        },
      },
      order: sortsObject,
    });
  }

  findByDeliveryStatus(deliveryStatus: DeliveryStatusType[]) {
    return this.donBanHangRepository.find({
      where: {
        deliveryStatus: In(deliveryStatus),
      },
    });
  }

  findByIds(ids: number[]) {
    return this.donBanHangRepository.find({
      where: {
        id: In(ids),
      },
      relations: {
        salesperson: true,
        customer: true,
        productOfDonBanHangs: {
          product: true,
        },
        ctban: true,
      },
    });
  }

  findOne(id: number) {
    return this.donBanHangRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        salesperson: true,
        customer: true,
        dieuKhoan: true,
        cktm: true,
        productOfDonBanHangs: {
          product: {
            productGroup: true,
          },
        },
        ctban: {
          productOfCtban: {
            product: true,
          },
        },
      },
    });
  }

  findProductOfDonBanHang(donBanHang: DonBanHang, product: Product) {
    return this.productOfDonBanHangRepository.findOne({
      where: {
        donBanHang: {
          id: donBanHang.id,
        },
        product: {
          id: product.id,
        },
      },
    });
  }

  findProductsOfDonBanHang(donBanHang: DonBanHang) {
    return this.productOfDonBanHangRepository.find({
      where: {
        donBanHang: {
          id: donBanHang.id,
        },
      },
    });
  }

  deliverProduct(productOfDonBanHangId: number, delivered: number) {
    return this.productOfDonBanHangRepository.update(productOfDonBanHangId, {
      delivered: delivered,
    });
  }

  updateDeliveryStatus(
    donBanHangId: number,
    deliveryStatus: DeliveryStatusType,
  ) {
    return this.donBanHangRepository.update(donBanHangId, {
      deliveryStatus: deliveryStatus,
    });
  }

  update(id: number, donBanHang: Partial<DonBanHang>) {
    return this.donBanHangRepository.update(id, donBanHang);
  }

  remove(id: number) {
    return this.donBanHangRepository.delete(id);
  }
}
