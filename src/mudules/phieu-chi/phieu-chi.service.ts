import { Injectable } from '@nestjs/common';
import { CreatePhieuChiDto } from './dto/create-phieu-chi.dto';
import { UpdatePhieuChiDto } from './dto/update-phieu-chi.dto';

@Injectable()
export class PhieuChiService {
  create(createPhieuChiDto: CreatePhieuChiDto) {
    return 'This action adds a new phieuChi';
  }

  findAll() {
    return `This action returns all phieuChi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phieuChi`;
  }

  update(id: number, updatePhieuChiDto: UpdatePhieuChiDto) {
    return `This action updates a #${id} phieuChi`;
  }

  remove(id: number) {
    return `This action removes a #${id} phieuChi`;
  }
}
