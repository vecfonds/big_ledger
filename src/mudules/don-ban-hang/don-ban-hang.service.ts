import {
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
import { ORDER, OrderType } from 'src/constants';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class DonBanHangService {
  constructor(
    private readonly donBanHangRepository: DonBanHangRepository,
    private readonly employeeService: EmployeeService,
    private readonly customerService: CustomerService,
  ) {}

  async create(createDonBanHangDto: CreateDonBanHangDto) {
    const salesperson = await this.employeeService.findOneSalesperson(
      createDonBanHangDto.salespersonId,
    );
    if (!salesperson) {
      throw new NotFoundException('Salesperson not found');
    }
    const customer = await this.customerService.findOne(
      createDonBanHangDto.customerId,
    );
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return this.donBanHangRepository.create(
      createDonBanHangDto,
      salesperson,
      customer,
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

  update(id: number, updateDonBanHangDto: UpdateDonBanHangDto) {
    return `This action updates a #${id} donBanHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donBanHang`;
  }
}
