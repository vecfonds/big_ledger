import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  PhieuThuTienMat,
  PhieuThuTienGui,
  ChungTuCuaPhieuThu,
} from './entities/phieu-thu.entity';
import { CreatePhieuThuTienMatDto } from './dto/create-phieu-thu.dto';
import { Customer } from '../customer/entities/customer.entity';
import { Salesperson } from '../employee/entities/employee.entity';
import { Ctban } from '../ctban/entities/ctban.entity';

@Injectable()
export class PhieuThuRepository {
  private readonly ptTienMatRepository: Repository<PhieuThuTienMat>;
  private readonly ptTienGuiRepository: Repository<PhieuThuTienGui>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.ptTienMatRepository = this.dataSource.getRepository(PhieuThuTienMat);
    this.ptTienGuiRepository = this.dataSource.getRepository(PhieuThuTienGui);
  }

  // Tien mat

  createPhieuThuTienMat(
    createPhieuThuDto: CreatePhieuThuTienMatDto,
    customer: Customer,
    salesperson: Salesperson,
    chungtu: { ctban: Ctban; money: number; content: string }[],
  ) {
    const newPhieuThu = this.ptTienMatRepository.create({
      ...createPhieuThuDto,
      customer: customer,
      salesperson: salesperson,
    });
    return this.dataSource.transaction(async (manager) => {
      const phieuThu = await manager.save(newPhieuThu);
      await Promise.all(
        chungtu.map(async (each) => {
          const chungTu = manager.create(ChungTuCuaPhieuThu, {
            ctban: each.ctban,
            money: each.money,
            content: each.content,
            phieuThu: phieuThu,
          });
          return manager.save(chungTu);
        }),
      );
      return phieuThu;
    });
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
