import { Injectable } from '@nestjs/common';
import { CreatePhieuNhapDto } from './dto/create-phieu-nhap.dto';
import { UpdatePhieuNhapDto } from './dto/update-phieu-nhap.dto';

@Injectable()
export class PhieuNhapService {
  create(createPhieuNhapDto: CreatePhieuNhapDto) {
    return 'This action adds a new phieuNhap';
  }

  findAll() {
    return `This action returns all phieuNhap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuNhap`;
  }

  update(id: number, updatePhieuNhapDto: UpdatePhieuNhapDto) {
    return `This action updates a #${id} phieuNhap`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuNhap`;
  }
}
