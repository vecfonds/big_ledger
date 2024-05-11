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

  async findOne(id: number) {
    const dieuKhoan = await this.dieuKhoanRepository.findOne(id);
    if (!dieuKhoan) {
      throw new NotFoundException('DieuKhoan not found');
    }
    return dieuKhoan;
  }

  update(id: number, updateDieuKhoanDto: UpdateDieuKhoanDto) {
    return this.dieuKhoanRepository.update(id, updateDieuKhoanDto);
  }

  remove(id: number) {
    return `This action removes a #${id} dieuKhoan`;
  }
}
