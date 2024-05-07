import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { PhieuThuTienMat, PhieuThuTienGui } from './entities/phieu-thu.entity';

@Injectable()
export class PhieuThuRepository {
  private readonly ptTienMatRepository: Repository<PhieuThuTienMat>;
  private readonly ptTienGuiRepository: Repository<PhieuThuTienGui>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.ptTienMatRepository = this.dataSource.getRepository(PhieuThuTienMat);
    this.ptTienGuiRepository = this.dataSource.getRepository(PhieuThuTienGui);
  }

  // Tien mat

  createPhieuThuTienMat() {
    return this.ptTienMatRepository.create();
  }

  findAllPhieuThuTienMat() {
    return this.ptTienMatRepository.find();
  }

  findOnePhieuThuTienMat(id: number) {
    return this.ptTienMatRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  // Tien gui

  createPhieuThuTienGui() {
    return this.ptTienGuiRepository.create();
  }

  findAllPhieuThuTienGui() {
    return this.ptTienGuiRepository.find();
  }

  findOnePhieuThuTienGui(id: number) {
    return this.ptTienGuiRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
