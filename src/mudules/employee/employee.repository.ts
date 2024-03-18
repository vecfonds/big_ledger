import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import {
  Accountant,
  PurchasingOfficer,
  Salesperson,
  Admin,
  WarehouseKeeper,
} from './entities/employee.entity';

@Injectable()
export class EmployeeRepository {
  private readonly pOfficerRepository: Repository<PurchasingOfficer>;
  private readonly accountantRepository: Repository<Accountant>;
  private readonly salespersonRepository: Repository<Salesperson>;
  private readonly adminRepository: Repository<Admin>;
  private readonly wKeeperRepository: Repository<WarehouseKeeper>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.pOfficerRepository = this.dataSource.getRepository(PurchasingOfficer);
    this.accountantRepository = this.dataSource.getRepository(Accountant);
    this.salespersonRepository = this.dataSource.getRepository(Salesperson);
    this.adminRepository = this.dataSource.getRepository(Admin);
    this.wKeeperRepository = this.dataSource.getRepository(WarehouseKeeper);
  }

  create() {
    return 'This action adds a new donMuaHang';
  }

  findAllWarehouseKeeper() {
    return this.wKeeperRepository.find();
  }

  findAllPurchasingOfficer() {
    return this.pOfficerRepository.find();
  }

  findAllSalesperson() {
    return this.salespersonRepository.find();
  }

  findAllAdmin() {
    return this.adminRepository.find();
  }

  findAllAccountant() {
    return this.accountantRepository.find();
  }

  findOneWarehouseKeeper(id: number) {
    return this.wKeeperRepository.findOneBy({
      id: id,
    });
  }

  findOnePurchasingOfficer(id: number) {
    return this.pOfficerRepository.findOneBy({
      id: id,
    });
  }

  findOneSalesperson(id: number) {
    return this.salespersonRepository.findOneBy({
      id: id,
    });
  }

  findOneAdmin(id: number) {
    return this.adminRepository.findOneBy({
      id: id,
    });
  }

  findOneAccountant(id: number) {
    return this.accountantRepository.findOneBy({
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
