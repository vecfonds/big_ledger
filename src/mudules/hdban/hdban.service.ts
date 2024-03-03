import { Injectable } from '@nestjs/common';
import { CreateHdbanDto } from './dto/create-hdban.dto';
import { UpdateHdbanDto } from './dto/update-hdban.dto';

@Injectable()
export class HdbanService {
  create(createHdbanDto: CreateHdbanDto) {
    return 'This action adds a new hdban';
  }

  findAll() {
    return `This action returns all hdban`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hdban`;
  }

  update(id: number, updateHdbanDto: UpdateHdbanDto) {
    return `This action updates a #${id} hdban`;
  }

  remove(id: number) {
    return `This action removes a #${id} hdban`;
  }
}
