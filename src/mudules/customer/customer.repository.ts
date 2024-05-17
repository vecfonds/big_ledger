import { Injectable } from '@nestjs/common';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { Customer, CustomerGroup } from './entities/customer.entity';
import {
  CreateCustomerDto,
  CreateCustomerGroupDto,
} from './dto/create-customer.dto';
import {
  UpdateCustomerDto,
  UpdateCustomerGroupDto,
} from './dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  private readonly customerRepository: Repository<Customer>;
  private readonly customerGroupRepository: Repository<CustomerGroup>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.customerRepository = this.dataSource.getRepository(Customer);
    this.customerGroupRepository = this.dataSource.getRepository(CustomerGroup);
  }

  createGroup(createCustomerGroupDto: CreateCustomerGroupDto) {
    const newCustomerGroup = this.customerGroupRepository.create(
      createCustomerGroupDto,
    );
    return this.customerGroupRepository.save(newCustomerGroup);
  }

  create(createCustomerDto: CreateCustomerDto, customerGroup: CustomerGroup) {
    const newCustomer = this.customerRepository.create({
      ...createCustomerDto,
      customerGroup: customerGroup,
    });
    return this.customerRepository.save(newCustomer);
  }

  findAllGroup() {
    return this.customerGroupRepository.find({
      relations: {
        customers: true,
      },
    });
  }

  findAll() {
    return this.customerRepository.find({
      relations: {
        customerGroup: true,
        donBanHangs: true,
        phieuThu: true,
      },
    });
  }

  findByIds(ids: number[]) {
    return this.customerRepository.find({
      where: {
        id: In(ids),
      },
    });
  }

  findOneGroup(id: number) {
    return this.customerGroupRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        customers: true,
      },
    });
  }

  findOne(id: number) {
    return this.customerRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        customerGroup: true,
        donBanHangs: true,
        phieuThu: true,
        dieuKhoans: true,
        cktms: true,
      },
    });
  }

  update(id: number, updateCustomer: UpdateCustomerDto) {
    return this.customerRepository.update(id, updateCustomer);
  }

  updateGroup(id: number, updateCustomerGroup: UpdateCustomerGroupDto) {
    return this.customerGroupRepository.update(id, updateCustomerGroup);
  }

  remove(id: number) {
    return this.customerRepository.delete(id);
  }

  removeGroup(id: number) {
    return this.customerGroupRepository.delete(id);
  }

  findOneByPhone(phone: string) {
    return this.customerRepository.findOne({
      where: {
        phone: phone,
      },
      relations: {
        customerGroup: true,
        donBanHangs: true,
        phieuThu: true,
      },
    });
  }

  findOneByEmail(email: string) {
    return this.customerRepository.findOne({
      where: {
        email: email,
      },
      relations: {
        customerGroup: true,
        donBanHangs: true,
        phieuThu: true,
      },
    });
  }
}
