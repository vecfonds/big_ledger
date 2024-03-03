import { Injectable } from '@nestjs/common';
import { CreateDonMuaHangDto } from './dto/create-don-mua-hang.dto';
import { UpdateDonMuaHangDto } from './dto/update-don-mua-hang.dto';

@Injectable()
export class DonMuaHangService {
  create(createDonMuaHangDto: CreateDonMuaHangDto) {
    return 'This action adds a new donMuaHang';
  }

  findAll() {
    return `This action returns all donMuaHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donMuaHang`;
  }

  update(id: number, updateDonMuaHangDto: UpdateDonMuaHangDto) {
    return `This action updates a #${id} donMuaHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
