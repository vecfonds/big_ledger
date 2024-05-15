import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DieuKhoan } from './entities/dieu-khoan.entity';
import { CreateDieuKhoanDto } from './dto/create-dieu-khoan.dto';
import { UpdateDieuKhoanDto } from './dto/update-dieu-khoan.dto';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class DieuKhoanRepository {
  private readonly dieuKhoanRepository: Repository<DieuKhoan>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.dieuKhoanRepository = this.dataSource.getRepository(DieuKhoan);
  }

  create(createDieuKhoanDto: CreateDieuKhoanDto, customer: Customer) {
    const newDieuKhoan = this.dieuKhoanRepository.create({
      ...createDieuKhoanDto,
      customer: customer,
    });
    return this.dieuKhoanRepository.save(newDieuKhoan);
  }

  findAll() {
    return this.dieuKhoanRepository.find();
  }

  findByCustomer(id: number) {
    return this.dieuKhoanRepository.find({
      where: {
        customer: {
          id: id,
        },
      },
    });
  }

  findOne(id: number) {
    return this.dieuKhoanRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateDieuKhoanDto: UpdateDieuKhoanDto) {
    return this.dieuKhoanRepository.update(id, updateDieuKhoanDto);
  }

  remove(id: number) {
    return this.dieuKhoanRepository.delete(id);
  }
}
