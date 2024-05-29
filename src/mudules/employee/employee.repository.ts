import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import {
  Accountant,
  PurchasingOfficer,
  Salesperson,
  Admin,
  WarehouseKeeper,
} from './entities/employee.entity';
import {
  CreateAdminDto,
  CreateAccountantDto,
  CreatePurchasingOfficerDto,
  CreateSalespersonDto,
  CreateWarehouseKeeperDto,
} from './dto/create-employee.dto';
import { DEFAULT_VALUES } from 'src/constants';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

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

  createAdmin(createAdminDto: CreateAdminDto) {
    return this.adminRepository.save(createAdminDto);
  }

  createAccountant(createAccountantDto: CreateAccountantDto, password: string) {
    const newAccountant = this.accountantRepository.create({
      name: createAccountantDto.name,
      email: createAccountantDto.email,
      phone: createAccountantDto.phone,
      address: createAccountantDto.address,
      password: password,
      avatar: createAccountantDto.avatar ?? DEFAULT_VALUES.DEFAULT_AVATAR,
    });
    return this.accountantRepository.save(newAccountant);
  }

  createSalesperson(createSalespersonDto: CreateSalespersonDto) {
    return this.salespersonRepository.save(createSalespersonDto);
  }

  createPurchasingOfficer(
    createPurchasingOfficerDto: CreatePurchasingOfficerDto,
  ) {
    return this.pOfficerRepository.save(createPurchasingOfficerDto);
  }

  createWarehouseKeeper(createWarehouseKeeperDto: CreateWarehouseKeeperDto) {
    return this.wKeeperRepository.save(createWarehouseKeeperDto);
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

  findSalespersonByIds(ids: number[]) {
    return this.salespersonRepository.find({
      where: {
        id: In(ids),
      },
    });
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

  findOneByEmail(email: string) {
    return this.accountantRepository.findOneBy({
      email: email,
    });
  }

  update(id: number, updateDto: UpdateEmployeeDto) {
    return this.accountantRepository.update(id, updateDto);
  }

  updatePassword(id: number, password: string) {
    return this.accountantRepository.update(id, {
      password: password,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
