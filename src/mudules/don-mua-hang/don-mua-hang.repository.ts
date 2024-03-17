import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { DonMuaHang } from './entities/don-mua-hang.entity';
import { GetDonMuaHangDto } from './dto/get-don-mua-hang.dto';

@Injectable()
export class DonMuaHangRepository {
  private readonly donMuaHangRepository: Repository<DonMuaHang>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.donMuaHangRepository = this.dataSource.getRepository(DonMuaHang);
  }
  create() {
    return 'This action adds a new donMuaHang';
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
