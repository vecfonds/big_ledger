import { Injectable } from '@nestjs/common';
import { CreateCtmuaDto } from './dto/create-ctmua.dto';
import { UpdateCtmuaDto } from './dto/update-ctmua.dto';
import { GetCtmuaDto } from './dto/get-ctmua.dto';
import { CtmuaRepository } from './ctmua.repository';
import { PageMetaDto } from 'src/common/dto/page-meta.dto';

@Injectable()
export class CtmuaService {
  constructor(private readonly ctmuaRepository: CtmuaRepository) {}

  create(createCtmuaDto: CreateCtmuaDto) {
    return 'This action adds a new ctmua';
  }

  async findAll(query: GetCtmuaDto) {
    const ctmuas = await this.ctmuaRepository.findAll(
      query.currentPage,
      query.pageSize,
    );
    const metaData = new PageMetaDto(query, ctmuas.length);
    return {
      metaData: metaData,
      data: ctmuas,
    };
  }

  async findOne(id: number) {
    const ctmua = await this.ctmuaRepository.findOne(id);
    if (!ctmua) {
      return 'Ctmua not found';
    }
    return {
      metaData: {},
      data: ctmua,
    };
  }

  update(id: number, updateCtmuaDto: UpdateCtmuaDto) {
    return `This action updates a #${id} ctmua`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctmua`;
  }
}
