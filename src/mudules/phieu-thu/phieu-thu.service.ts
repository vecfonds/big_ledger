import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreatePhieuThuTienGuiDto,
  CreatePhieuThuTienMatDto,
} from './dto/create-phieu-thu.dto';
import {
  UpdatePhieuThuTienGuiDto,
  UpdatePhieuThuTienMatDto,
} from './dto/update-phieu-thu.dto';
import { PhieuThuRepository } from './phieu-thu.repository';
import { CustomerService } from '../customer/customer.service';
import { EmployeeService } from '../employee/employee.service';
import { CtbanService } from '../ctban/ctban.service';

@Injectable()
export class PhieuThuService {
  constructor(
    private readonly phieuThuRepository: PhieuThuRepository,
    private readonly customerService: CustomerService,
    private readonly employeeService: EmployeeService,
    private readonly ctbanService: CtbanService,
  ) {}

  // Tien mat

  async createTienMat(createPhieuThuDto: CreatePhieuThuTienMatDto) {
    const customer = await this.customerService.findOne(
      createPhieuThuDto.customerId,
    );
    const salesperson = await this.employeeService.findOneSalesperson(
      createPhieuThuDto.salespersonID,
    );
    const chungtu = await Promise.all(
      createPhieuThuDto.chungTuDto.map(async (chungtu) => {
        const ctban = await this.ctbanService.findOne(chungtu.ctbanId);
        // const totalMoney = await this.ctbanService.findTotalMoney(ctban.id)
        return {
          ctban: ctban,
          money: chungtu.money,
          content: chungtu.content ?? '',
        };
      }),
    );

    return this.phieuThuRepository.createPhieuThuTienMat(
      createPhieuThuDto,
      customer,
      salesperson,
      chungtu,
    );
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

  updateTienMat(id: number, updatePhieuThuDto: UpdatePhieuThuTienMatDto) {
    return `This action updates a #${id} phieuThu`;
  }

  removeTienMat(id: number) {
    return `This action removes a #${id} phieuThu`;
  }

  // Tien gui

  createTienGui(createPhieuThuDto: CreatePhieuThuTienGuiDto) {
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

  updateTienGui(id: number, updatePhieuThuDto: UpdatePhieuThuTienGuiDto) {
    return `This action updates a #${id} phieuThu`;
  }

  removeTienGui(id: number) {
    return `This action removes a #${id} phieuThu`;
  }
}
