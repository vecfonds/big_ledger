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
    return this.cktmRepository.findByCustomer(customerId);
  }

  async findOne(id: number) {
    const cktm = await this.cktmRepository.findOne(id);
    if (!cktm) {
      throw new NotFoundException(`Ctkm #${id} not found`);
    }
    return cktm;
  }

  async update(id: number, updateCktmDto: UpdateCktmDto) {
    await this.findOne(id);
    return this.cktmRepository.update(id, updateCktmDto);
  }

  remove(id: number) {
    return this.cktmRepository.remove(id);
  }
}
