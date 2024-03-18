import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { DonMuaHang } from './entities/don-mua-hang.entity';
import { GetDonMuaHangDto } from './dto/get-don-mua-hang.dto';
import { CreateDonMuaHangDto } from './dto/create-don-mua-hang.dto';
import { PurchasingOfficer } from '../employee/entities/employee.entity';
import { Supplier } from '../supplier/entities';

@Injectable()
export class DonMuaHangRepository {
  private readonly donMuaHangRepository: Repository<DonMuaHang>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.donMuaHangRepository = this.dataSource.getRepository(DonMuaHang);
  }

  create(
    createDonMuaHangDto: CreateDonMuaHangDto,
    purchasingOfficer: PurchasingOfficer,
    supplier: Supplier,
  ) {
    const newDonMuaHang = this.donMuaHangRepository.create({
      ...createDonMuaHangDto,
      purchasingOfficer: purchasingOfficer,
      supplier: supplier,
    });

    return this.donMuaHangRepository.save(newDonMuaHang);
  }

  findAll(currentPage: number, pageSize: number) {
    return this.donMuaHangRepository.find({
      relations: {
        purchasingOfficer: true,
        supplier: true,
        productOfDonMuaHangs: true,
        ctmua: true,
      },
      take: pageSize,
      skip: pageSize * (currentPage - 1),
    });
  }

  findOne(id: number) {
    return this.donMuaHangRepository.findOneBy({
      id: id,
    });
  }

  update(id: number) {
    return `This action updates a #${id} donMuaHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
