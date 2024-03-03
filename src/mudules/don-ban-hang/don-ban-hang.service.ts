import { Injectable } from '@nestjs/common';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { UpdateDonBanHangDto } from './dto/update-don-ban-hang.dto';

@Injectable()
export class DonBanHangService {
  create(createDonBanHangDto: CreateDonBanHangDto) {
    return 'This action adds a new donBanHang';
  }

  findAll() {
    return `This action returns all donBanHang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donBanHang`;
  }

  update(id: number, updateDonBanHangDto: UpdateDonBanHangDto) {
    return `This action updates a #${id} donBanHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donBanHang`;
  }
}
