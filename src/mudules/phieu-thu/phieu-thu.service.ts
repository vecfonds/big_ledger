import { Injectable } from '@nestjs/common';
import { CreatePhieuThuDto } from './dto/create-phieu-thu.dto';
import { UpdatePhieuThuDto } from './dto/update-phieu-thu.dto';

@Injectable()
export class PhieuThuService {
  create(createPhieuThuDto: CreatePhieuThuDto) {
    return 'This action adds a new phieuThu';
  }

  findAll() {
    return `This action returns all phieuThu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuThu`;
  }

  update(id: number, updatePhieuThuDto: UpdatePhieuThuDto) {
    return `This action updates a #${id} phieuThu`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuThu`;
  }
}
