import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';

import { ORDER, OrderType } from 'src/constants';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateCtbanDto } from './dto/create-ctban.dto';
import { UpdateCtbanDto } from './dto/update-ctban.dto';
import { GetCtbanDto } from './dto/get-ctban.dto';
import { CtbanRepository } from './ctban.repository';
import { EmployeeService } from '../employee/employee.service';
import { DonBanHangService } from '../don-ban-hang/don-ban-hang.service';

@Injectable()
export class CtbanService {
  constructor(
    private readonly ctbanRepository: CtbanRepository,
    private readonly employeeService: EmployeeService,
    private readonly donBanHangService: DonBanHangService,
  ) {}

  async create(createCtbanDto: CreateCtbanDto) {
    const warehouseKeeper = await this.employeeService.findOneWarehouseKeeper(
      createCtbanDto.warehouseKeeperId,
    );
    const donBanHangs = await this.donBanHangService.findByIds(
      createCtbanDto.donBanHangIds,
    );
    const customer = donBanHangs[0].customer;
    return this.ctbanRepository.create(
      createCtbanDto,
      warehouseKeeper,
      donBanHangs,
      customer,
    );
  }

  async findAll(query: GetCtbanDto) {
    let sortOptions: [string, OrderType][] = [];
    if (query.sorts) {
      sortOptions = query.sorts;
    } else {
      sortOptions = [['saleDate', ORDER.DESC]];
    }
    sortOptions.forEach((sortOption) => {
      if (!['id', 'deliveryDate', 'paymentMethod'].includes(sortOption[0])) {
        throw new UnprocessableEntityException(
          'Key of sort options is not valid',
        );
      }
    });
    const donBanHangs = await this.ctbanRepository.findAll(
      query.pageSize,
      query.pageSize * (query.currentPage - 1),
      sortOptions,
    );
    const pagination = new PaginationDto(
      query.currentPage,
      query.pageSize,
      Math.ceil(donBanHangs[1] / query.pageSize),
      donBanHangs[1],
    );
    return { data: donBanHangs[0], pagination: pagination };
  }

  async findOne(id: number) {
    const ctban = await this.ctbanRepository.findOne(id);
    if (!ctban) {
      throw new NotFoundException('Ctban not found');
    }
    return ctban;
  }

  update(id: number, updateCtbanDto: UpdateCtbanDto) {
    return `This action updates a #${id} ctban`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctban`;
  }
}
