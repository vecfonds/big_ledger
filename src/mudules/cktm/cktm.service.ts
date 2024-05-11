import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCktmDto } from './dto/create-cktm.dto';
import { UpdateCktmDto } from './dto/update-cktm.dto';
import { CktmRepository } from './cktm.repository';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class CktmService {
  constructor(
    private readonly cktmRepository: CktmRepository,
    private readonly customerService: CustomerService,
  ) {}

  async create(createCktmDto: CreateCktmDto) {
    const customer = await this.customerService.findOne(
      createCktmDto.customerId,
    );
    return await this.cktmRepository.create(createCktmDto, customer);
  }

  findAll() {
    return this.cktmRepository.findAll();
  }

  async findByCustomer(customerId: number) {
    const customer = await this.customerService.findOne(customerId);
    return this.cktmRepository.findByCustomer(customer);
  }

  async findOne(id: number) {
    const cktm = await this.cktmRepository.findOne(id);
    if (!cktm) {
      throw new NotFoundException(`Ctkm #${id} not found`);
    }
    return cktm;
  }

  update(id: number, updateCktmDto: UpdateCktmDto) {
    return `This action updates a #${id} cktm`;
  }

  remove(id: number) {
    return `This action removes a #${id} cktm`;
  }
}
