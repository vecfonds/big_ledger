import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDieuKhoanDto } from './dto/create-dieu-khoan.dto';
import { UpdateDieuKhoanDto } from './dto/update-dieu-khoan.dto';
import { DieuKhoanRepository } from './dieu-khoan.repositoy';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class DieuKhoanService {
  constructor(
    private readonly dieuKhoanRepository: DieuKhoanRepository,
    private readonly customerService: CustomerService,
  ) {}

  async create(createDieuKhoanDto: CreateDieuKhoanDto) {
    const customer = await this.customerService.findOne(
      createDieuKhoanDto.customerId,
    );
    return this.dieuKhoanRepository.create(createDieuKhoanDto, customer);
  }

  findAll() {
    return this.dieuKhoanRepository.findAll();
  }

  async findByCustomer(id: number) {
    const customer = await this.customerService.findOne(id);
    return this.dieuKhoanRepository.findByCustomer(id);
  }

  async findOne(id: number) {
    const dieuKhoan = await this.dieuKhoanRepository.findOne(id);
    if (!dieuKhoan) {
      throw new NotFoundException('DieuKhoan not found');
    }
    return dieuKhoan;
  }

  async update(id: number, updateDieuKhoanDto: UpdateDieuKhoanDto) {
    await this.findOne(id);
    return this.dieuKhoanRepository.update(id, updateDieuKhoanDto);
  }

  remove(id: number) {
    return this.dieuKhoanRepository.remove(id);
  }
}
