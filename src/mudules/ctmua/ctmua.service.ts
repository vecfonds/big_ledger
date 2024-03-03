import { Injectable } from '@nestjs/common';
import { CreateCtmuaDto } from './dto/create-ctmua.dto';
import { UpdateCtmuaDto } from './dto/update-ctmua.dto';

@Injectable()
export class CtmuaService {
  create(createCtmuaDto: CreateCtmuaDto) {
    return 'This action adds a new ctmua';
  }

  findAll() {
    return `This action returns all ctmua`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ctmua`;
  }

  update(id: number, updateCtmuaDto: UpdateCtmuaDto) {
    return `This action updates a #${id} ctmua`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctmua`;
  }
}
