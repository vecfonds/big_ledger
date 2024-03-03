import { Injectable } from '@nestjs/common';
import { CreatePhieuXuatDto } from './dto/create-phieu-xuat.dto';
import { UpdatePhieuXuatDto } from './dto/update-phieu-xuat.dto';

@Injectable()
export class PhieuXuatService {
  create(createPhieuXuatDto: CreatePhieuXuatDto) {
    return 'This action adds a new phieuXuat';
  }

  findAll() {
    return `This action returns all phieuXuat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuXuat`;
  }

  update(id: number, updatePhieuXuatDto: UpdatePhieuXuatDto) {
    return `This action updates a #${id} phieuXuat`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuXuat`;
  }
}
