import { Injectable, NotFoundException } from '@nestjs/common';

import { DonMuaHangRepository } from './don-mua-hang.repository';
import { CreateDonMuaHangDto } from './dto/create-don-mua-hang.dto';
import { UpdateDonMuaHangDto } from './dto/update-don-mua-hang.dto';
import { GetDonMuaHangDto } from './dto/get-don-mua-hang.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DEFAULT_VALUES } from 'src/constants';
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
    const currentPage = query.currentPage ?? DEFAULT_VALUES.CURRENT_PAGE;
    const pageSize = query.pageSize ?? DEFAULT_VALUES.PAGE_SIZE;
    const donMuaHangs = await this.donMuaHangRepository.findAll(
      currentPage,
      pageSize,
    );
    const pagination = new PaginationDto(
      currentPage,
      pageSize,
      Math.ceil(donMuaHangs.length / pageSize),
      donMuaHangs.length,
    );
    return {
      metaData: pagination,
      data: donMuaHangs,
    };
  }

  async findOne(id: number) {
    const donMuaHang = await this.donMuaHangRepository.findOne(id);
    if (!donMuaHang) {
      throw new NotFoundException(`Don mua hang with ${id} not found`);
    }
    return {
      metaData: {},
      data: donMuaHang,
    };
  }

  update(id: number, updateDonMuaHangDto: UpdateDonMuaHangDto) {
    return `This action updates a #${id} donMuaHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
