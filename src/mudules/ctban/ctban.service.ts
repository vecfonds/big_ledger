import { Injectable } from '@nestjs/common';
import { CreateCtbanDto } from './dto/create-ctban.dto';
import { UpdateCtbanDto } from './dto/update-ctban.dto';

@Injectable()
export class CtbanService {
  create(createCtbanDto: CreateCtbanDto) {
    return 'This action adds a new ctban';
  }

  findAll() {
    return `This action returns all ctban`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctban`;
  }

  update(id: number, updateCtbanDto: UpdateCtbanDto) {
    return `This action updates a #${id} ctban`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctban`;
  }
}
