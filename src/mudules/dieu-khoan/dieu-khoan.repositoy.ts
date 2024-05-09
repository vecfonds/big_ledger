import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DieuKhoan } from './entities/dieu-khoan.entity';
import { CreateDieuKhoanDto } from './dto/create-dieu-khoan.dto';
import { UpdateDieuKhoanDto } from './dto/update-dieu-khoan.dto';

@Injectable()
export class DieuKhoanRepository {
  private readonly dieuKhoanRepository: Repository<DieuKhoan>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.dieuKhoanRepository = this.dataSource.getRepository(DieuKhoan);
  }

  create(createDieuKhoanDto: CreateDieuKhoanDto) {
    const newDieuKhoan = this.dieuKhoanRepository.create(createDieuKhoanDto);
    return this.dieuKhoanRepository.save(newDieuKhoan);
  }

  findAll() {
    return this.dieuKhoanRepository.find();
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
