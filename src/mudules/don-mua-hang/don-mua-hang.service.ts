import { Injectable } from '@nestjs/common';

import { DonMuaHangRepository } from './don-mua-hang.repository';
import { CreateDonMuaHangDto } from './dto/create-don-mua-hang.dto';
import { UpdateDonMuaHangDto } from './dto/update-don-mua-hang.dto';
import { GetDonMuaHangDto } from './dto/get-don-mua-hang.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { DEFAULT_VALUES } from 'src/constants';

@Injectable()
export class DonMuaHangService {
  constructor(private readonly donMuaHangRepository: DonMuaHangRepository) {}

  create(createDonMuaHangDto: CreateDonMuaHangDto) {
    return 'This action adds a new donMuaHang';
  }

  async findAll(query: GetDonMuaHangDto) {
    const currentPage = query.currentPage ?? DEFAULT_VALUES.CURRENT_PAGE;
    const pageSize = query.pageSize ?? DEFAULT_VALUES.PAGE_SIZE;
    const donMuaHangs = await this.donMuaHangRepository.findAll(
      currentPage,
      pageSize,
    );
    const pagination = new PaginationDto(
      currentPage,
      pageSize,
      Math.ceil(donMuaHangs.length / pageSize),
      donMuaHangs.length,
    );
    return {
      metaData: pagination,
      data: donMuaHangs,
    };
  }

  async findOne(id: number) {
    const donMuaHang = await this.donMuaHangRepository.findOne(id);
    if (!donMuaHang) {
      throw new Error(`Don mua hang with ${id} not found`);
    }
    return {
      metaData: {},
      data: donMuaHang,
    };
  }

  update(id: number, updateDonMuaHangDto: UpdateDonMuaHangDto) {
    return `This action updates a #${id} donMuaHang`;
  }

  remove(id: number) {
    return `This action removes a #${id} donMuaHang`;
  }
}
