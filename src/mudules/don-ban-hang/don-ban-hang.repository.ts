import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { DonBanHang } from './entities/don-ban-hang.entity';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { Salesperson } from '../employee/entities/employee.entity';
import { Customer } from '../customer/entities/customer.entity';
import { OrderType } from 'src/constants';

@Injectable()
export class DonBanHangRepository {
  private readonly donBanHangRepository: Repository<DonBanHang>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.donBanHangRepository = this.dataSource.getRepository(DonBanHang);
  }

  create(
    createDonBanHangDto: CreateDonBanHangDto,
    salesperson: Salesperson,
    customer: Customer,
  ) {
    const newDonBanHang = this.donBanHangRepository.create({
      ...createDonBanHangDto,
      salesperson: salesperson,
      customer: customer,
    });
    return this.donBanHangRepository.save(newDonBanHang);
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
        productOfDonBanHangs: true,
        ctbans: true,
      },
      order: sortsObject,
      take: take,
      skip: skip,
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
        productOfDonBanHangs: true,
        ctbans: true,
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
        productOfDonBanHangs: true,
        ctbans: true,
      },
    });
  }

  update(id: number, donBanHang: Partial<DonBanHang>) {
    return this.donBanHangRepository.update(id, donBanHang);
  }

  remove(id: number) {
    return this.donBanHangRepository.delete(id);
  }
}
