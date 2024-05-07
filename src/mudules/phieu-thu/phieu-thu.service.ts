import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePhieuThuDto } from './dto/create-phieu-thu.dto';
import { UpdatePhieuThuDto } from './dto/update-phieu-thu.dto';
import { PhieuThuRepository } from './phieu-thu.repository';

@Injectable()
export class PhieuThuService {
  constructor(private readonly phieuThuRepository: PhieuThuRepository) {}

  // Tien mat

  createTienMat(createPhieuThuDto: CreatePhieuThuDto) {
    return 'This action adds a new phieuThu';
  }

  findAllTienMat() {
    return this.phieuThuRepository.findAllPhieuThuTienMat();
  }

  async findOneTienMat(id: number) {
    const phieuThu = await this.phieuThuRepository.findOnePhieuThuTienMat(id);
    if (!phieuThu) {
      throw new NotFoundException('PhieuThu not found');
    }
    return phieuThu;
  }

  updateTienMat(id: number, updatePhieuThuDto: UpdatePhieuThuDto) {
    return `This action updates a #${id} phieuThu`;
  }

  removeTienMat(id: number) {
    return `This action removes a #${id} phieuThu`;
  }

  // Tien gui

  createTienGui(createPhieuThuDto: CreatePhieuThuDto) {
    return 'This action adds a new phieuThu';
  }

  findAllTienGui() {
    return this.phieuThuRepository.findAllPhieuThuTienGui();
  }

  async findOneTienGui(id: number) {
    const phieuThu = await this.phieuThuRepository.findOnePhieuThuTienGui(id);
    if (!phieuThu) {
      throw new NotFoundException('PhieuThu not found');
    }
    return phieuThu;
  }

  updateTienGui(id: number, updatePhieuThuDto: UpdatePhieuThuDto) {
    return `This action updates a #${id} phieuThu`;
  }

  removeTienGui(id: number) {
    return `This action removes a #${id} phieuThu`;
  }
}
