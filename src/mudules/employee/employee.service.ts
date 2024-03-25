import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountantDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  create(createEmployeeDto: CreateAccountantDto) {
    return 'This action adds a new employee';
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

  findOneWarehouseKeeper(id: number) {
    return this.employeeRepository.findOneWarehouseKeeper(id);
  }

  findOnePurchasingOfficer(id: number) {
    return this.employeeRepository.findOnePurchasingOfficer(id);
  }

  findOneSalesperson(id: number) {
    return this.employeeRepository.findOneSalesperson(id);
  }

  findOneAdmin(id: number) {
    return this.employeeRepository.findOneAdmin(id);
  }

  findOneAccountant(id: number) {
    return this.employeeRepository.findOneAccountant(id);
  }

  findOneByEmail(email: string) {
    const employee = this.employeeRepository.findOneByEmail(email);
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
