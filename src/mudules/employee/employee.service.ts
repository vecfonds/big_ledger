import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateAccountantDto,
  CreateOtherEmployee,
} from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';
import { generateHash } from 'src/common/utils';
import { USER_ROLE } from 'src/constants';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  createAccountant(createAccountantDto: CreateAccountantDto) {
    const hashedPassword = generateHash(createAccountantDto.password);
    return this.employeeRepository.createAccountant(
      createAccountantDto,
      hashedPassword,
    );
  }

  createOtherEmployee(createOtherEmployee: CreateOtherEmployee) {
    switch (createOtherEmployee.role) {
      case USER_ROLE.ADMIN:
        return this.employeeRepository.createAdmin(createOtherEmployee);
      case USER_ROLE.PURCHARSING_OFFICER:
        return this.employeeRepository.createPurchasingOfficer(
          createOtherEmployee,
        );
      case USER_ROLE.SALESPERSON:
        return this.employeeRepository.createSalesperson(createOtherEmployee);
      case USER_ROLE.WAREHOUSE_KEEPER:
        return this.employeeRepository.createWarehouseKeeper(
          createOtherEmployee,
        );
      default:
        throw new NotFoundException(
          `Role ${createOtherEmployee.role} not found`,
        );
    }
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  findAllWareHouseKeeper() {
    return this.employeeRepository.findAllWarehouseKeeper();
  }

  findAllPurchasingOfficer() {
    return this.employeeRepository.findAllPurchasingOfficer();
  }

  findAllSalesperson() {
    return this.employeeRepository.findAllSalesperson();
  }

  findAllAdmin() {
    return this.employeeRepository.findAllAdmin();
  }

  findAllAccountant() {
    return this.employeeRepository.findAllAccountant();
  }

  async findOneWarehouseKeeper(id: number) {
    const warehouseKeeper =
      await this.employeeRepository.findOneWarehouseKeeper(id);
    if (!warehouseKeeper) {
      throw new NotFoundException(`Warehouse keeper with id ${id} not found`);
    }
    return warehouseKeeper;
  }

  async findOnePurchasingOfficer(id: number) {
    const purchasingOfficer =
      await this.employeeRepository.findOnePurchasingOfficer(id);
    if (!purchasingOfficer) {
      throw new NotFoundException(`Purchasing officer with id ${id} not found`);
    }
    return purchasingOfficer;
  }

  async findOneSalesperson(id: number) {
    const salesperson = await this.employeeRepository.findOneSalesperson(id);
    if (!salesperson) {
      throw new NotFoundException(`Salesperson with id ${id} not found`);
    }
    return salesperson;
  }

  async findOneAdmin(id: number) {
    const admin = await this.employeeRepository.findOneAdmin(id);
    if (!admin) {
      throw new NotFoundException(`Admin with id ${id} not found`);
    }
    return admin;
  }

  async findOneAccountant(id: number) {
    const accountant = await this.employeeRepository.findOneAccountant(id);
    if (!accountant) {
      throw new NotFoundException(`Accountant with id ${id} not found`);
    }
    return accountant;
  }

  async findOneByEmail(email: string) {
    const employee = await this.employeeRepository.findOneByEmail(email);
    if (!employee) {
      throw new NotFoundException(`Employee with email ${email} not found`);
    }
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
