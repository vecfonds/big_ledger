import { Injectable } from '@nestjs/common';
import { CreateHdmuaDto } from './dto/create-hdmua.dto';
import { UpdateHdmuaDto } from './dto/update-hdmua.dto';

@Injectable()
export class HdmuaService {
  create(createHdmuaDto: CreateHdmuaDto) {
    return 'This action adds a new hdmua';
  }

  findAll() {
    return `This action returns all hdmua`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hdmua`;
  }

  update(id: number, updateHdmuaDto: UpdateHdmuaDto) {
    return `This action updates a #${id} hdmua`;
  }

  remove(id: number) {
    return `This action removes a #${id} hdmua`;
  }
}
