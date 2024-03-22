import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { DonMuaHangRepository } from './don-mua-hang.repository';
import { CreateDonMuaHangDto } from './dto/create-don-mua-hang.dto';
import { UpdateDonMuaHangDto } from './dto/update-don-mua-hang.dto';
import { GetDonMuaHangDto } from './dto/get-don-mua-hang.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ORDER, OrderType } from 'src/constants';
import { EmployeeService } from '../employee/employee.service';
import { SupplierService } from '../supplier/supplier.service';

@Injectable()
export class DonMuaHangService {
  constructor(
    private readonly donMuaHangRepository: DonMuaHangRepository,
    private readonly employeeService: EmployeeService,
    private readonly supplierService: SupplierService,
  ) {}

  async create(createDonMuaHangDto: CreateDonMuaHangDto) {
    const purchasingOfficer =
      await this.employeeService.findOnePurchasingOfficer(
        createDonMuaHangDto.purchasingOfficerId,
      );
    if (!purchasingOfficer) {
      throw new NotFoundException(
        `Purchasing Officer with id ${createDonMuaHangDto.purchasingOfficerId} not found`,
      );
    }

    const supplier = await this.supplierService.findOne(
      createDonMuaHangDto.supplierId,
    );
    if (!supplier) {
      throw new NotFoundException(
        `Supplier with id ${createDonMuaHangDto.supplierId} not found`,
      );
    }

    return this.donMuaHangRepository.create(
      createDonMuaHangDto,
      purchasingOfficer,
      supplier,
    );
  }

  async findAll(query: GetDonMuaHangDto) {
    let sortObject: { [key: string]: OrderType } = {};
    if (!query.sorts) {
      sortObject = { id: ORDER.DESC };
    } else if (Array.isArray(query.sorts)) {
      query.sorts.forEach((sort) => {
        const sortValueParts = sort.split(':');
        sortObject[sortValueParts[0]] = sortValueParts[1] as OrderType;
      });
    } else {
      const sortValueParts = query.sorts.split(':');
      sortObject[sortValueParts[0]] = sortValueParts[1] as OrderType;
    }
    console.log(sortObject);
    console.log(Object.keys(sortObject));
    Object.keys(sortObject).forEach((value) => {
      if (
        ![
          'id',
          'ngayMua',
          'hanGiaoHang',
          'paymentStatus',
          'deliveryStatus',
          'documentStatus',
        ].includes(value)
      ) {
        throw new UnprocessableEntityException(
          'Key of sort options is not valid',
        );
      }
    });
    const donMuaHangs = await this.donMuaHangRepository.findAll(
      query.pageSize,
      query.pageSize * (query.currentPage - 1),
      sortObject,
    );
    const pagination = new PaginationDto(
      query.currentPage,
      query.pageSize,
      Math.ceil(donMuaHangs[1] / query.pageSize),
      donMuaHangs[1],
    );
    return { data: donMuaHangs[0], pagination: pagination };
  }

  async findOne(id: number) {
    const donMuaHang = await this.donMuaHangRepository.findOne(id);
    if (!donMuaHang) {
      throw new NotFoundException(`Don mua hang with ${id} not found`);
    }
    return donMuaHang;
  }

  update(id: number, updateDonMuaHangDto: UpdateDonMuaHangDto) {
    return `This action updates a #${id} donMuaHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
