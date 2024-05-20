import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  PhieuThuTienMat,
  PhieuThuTienGui,
  ChungTuCuaPhieuThuTienGui,
  ChungTuCuaPhieuThuTienMat,
} from './entities/phieu-thu.entity';
import {
  CreatePhieuThuTienMatDto,
  CreatePhieuThuTienGuiDto,
} from './dto/create-phieu-thu.dto';
import { Customer } from '../customer/entities/customer.entity';
import { Salesperson } from '../employee/entities/employee.entity';
import { Ctban } from '../ctban/entities/ctban.entity';
import { BankAccount } from '../bank-account/entities/bank-account.entity';

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
          const chungTu = manager.create(ChungTuCuaPhieuThuTienMat, {
            ctban: each.ctban,
            money: each.money,
            content: each.content,
            phieuThuTienMat: phieuThu,
          });
          return manager.save(chungTu);
        }),
      );
      return phieuThu;
    });
  }

  findAllPhieuThuTienMat() {
    return this.ptTienMatRepository.findAndCount({
      relations: {
        chungTuCuaPhieuThu: {
          ctban: true,
        },
        customer: true,
        salesperson: true,
      },
    });
  }

  findOnePhieuThuTienMat(id: number) {
    return this.ptTienMatRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        chungTuCuaPhieuThu: {
          ctban: true,
        },
        customer: true,
        salesperson: true,
      },
    });
  }

  // Tien gui

  createPhieuThuTienGui(
    createPhieuThuDto: CreatePhieuThuTienGuiDto,
    customer: Customer,
    salesperson: Salesperson,
    chungtu: { ctban: Ctban; money: number; content: string }[],
    bankAccount: BankAccount,
  ) {
    const newPhieuThu = this.ptTienGuiRepository.create({
      ...createPhieuThuDto,
      customer: customer,
      salesperson: salesperson,
      bankAccount: bankAccount,
    });
    return this.dataSource.transaction(async (manager) => {
      const phieuThu = await manager.save(newPhieuThu);
      await Promise.all(
        chungtu.map(async (each) => {
          const chungTu = manager.create(ChungTuCuaPhieuThuTienGui, {
            ctban: each.ctban,
            money: each.money,
            content: each.content,
            phieuThuTienGui: phieuThu,
          });
          return manager.save(chungTu);
        }),
      );
      return phieuThu;
    });
  }

  findAllPhieuThuTienGui() {
    return this.ptTienGuiRepository.findAndCount({
      relations: {
        chungTuCuaPhieuThu: {
          ctban: true,
        },
        bankAccount: true,
        customer: true,
        salesperson: true,
      },
    });
  }

  findOnePhieuThuTienGui(id: number) {
    return this.ptTienGuiRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        chungTuCuaPhieuThu: {
          ctban: true,
        },
        bankAccount: true,
        customer: true,
        salesperson: true,
      },
    });
  }
}
