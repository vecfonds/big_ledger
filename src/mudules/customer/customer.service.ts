import { Injectable, NotFoundException } from '@nestjs/common';

import {
  CreateCustomerDto,
  CreateCustomerGroupDto,
} from './dto/create-customer.dto';
import {
  UpdateCustomerDto,
  UpdateCustomerGroupDto,
} from './dto/update-customer.dto';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  createGroup(createCustomerGroupDto: CreateCustomerGroupDto) {
    return this.customerRepository.createGroup(createCustomerGroupDto);
  }

  async create(createCustomerDto: CreateCustomerDto) {
    const customerGroup = await this.customerRepository.findOneGroup(
      createCustomerDto.customerGroupId,
    );
    if (!customerGroup) {
      throw new NotFoundException('Customer group not found');
    }
    return this.customerRepository.create(createCustomerDto, customerGroup);
  }

  findAllGroup() {
    return this.customerRepository.findAllGroup();
  }

  findAll() {
    return this.customerRepository.findAll();
  }

  async findByIds(ids: number[]) {
    if (ids.length === 0) return this.customerRepository.findAll();
    const customers = await this.customerRepository.findByIds(ids);
    if (customers.length !== ids.length) {
      throw new NotFoundException('Some customers not found');
    }
    return customers;
  }

  async findOneGroup(id: number) {
    const customerGroup = await this.customerRepository.findOneGroup(id);
    if (!customerGroup) {
      throw new NotFoundException('Customer group not found');
    }
    return customerGroup;
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne(id);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async findOneByPhone(phone: string) {
    const customer = await this.customerRepository.findOneByPhone(phone);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async findOneByEmail(email: string) {
    const customer = await this.customerRepository.findOneByEmail(email);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    return customer;
  }

  async updateGroup(
    id: number,
    updateCustomerGroupDto: UpdateCustomerGroupDto,
  ) {
    await this.findOneGroup(id);
    return this.customerRepository.updateGroup(id, updateCustomerGroupDto);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.findOne(id);
    return this.customerRepository.update(id, updateCustomerDto);
  }

  removeGroup(id: number) {
    return this.customerRepository.removeGroup(id);
  }

  remove(id: number) {
    return this.customerRepository.remove(id);
  }
}
