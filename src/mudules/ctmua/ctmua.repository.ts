import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Ctmua } from './entities/ctmua.entity';
import { CreateCtmuaDto } from './dto/create-ctmua.dto';
import { WarehouseKeeper } from '../employee/entities/employee.entity';
import { DonMuaHang } from '../don-mua-hang/entities/don-mua-hang.entity';

@Injectable()
export class CtmuaRepository {
  private readonly ctmuaRepository: Repository<Ctmua>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.ctmuaRepository = this.dataSource.getRepository(Ctmua);
  }

  create(
    createCtmuaDto: CreateCtmuaDto,
    nguoiNhanHang: WarehouseKeeper,
    donMuaHang: DonMuaHang,
  ) {
    const newCtmua = this.ctmuaRepository.create({
      ...createCtmuaDto,
      nguoiNhanHang: nguoiNhanHang,
      donMuaHang: donMuaHang,
    });
    return this.ctmuaRepository.save(newCtmua);
  }

  findAll(currentPage: number, pageSize: number) {
    return this.ctmuaRepository.find({
      relations: {
        nguoiNhanHang: true,
        donMuaHang: true,
        productOfCtmua: true,
        phieuChi: true,
      },
      take: pageSize,
      skip: pageSize * (currentPage - 1),
    });
  }

  findOne(id: number) {
    return this.ctmuaRepository.findOneBy({
      id: id,
    });
  }

  update(id: number) {
    return `This action updates a #${id} ctmua`;
  }

  remove(id: number) {
    return `This action removes a #${id} ctmua`;
  }
}