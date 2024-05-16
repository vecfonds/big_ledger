import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDccnDto } from './dto/create-report-dccn.dto';
import { UpdateReportDccnDto } from './dto/update-report-dccn.dto';
import { ReportDccnRepository } from './report-dccn.repository';
import { CtbanService } from '../ctban/ctban.service';
import { PAYMENT_STATUS } from 'src/constants';

@Injectable()
export class ReportDccnService {
  constructor(
    private readonly reportDccnRepository: ReportDccnRepository,
    private readonly ctbanService: CtbanService,
  ) {}

  async create(createReportDccnDto: CreateReportDccnDto) {
    const ctbans =
      await this.ctbanService.findByPaymentStatusAndGroupByCustomer([
        PAYMENT_STATUS.NOT_PAID,
        PAYMENT_STATUS.BEING_PAID,
      ]);
    return this.reportDccnRepository.create(createReportDccnDto, ctbans);
  }

  findAll() {
    return this.reportDccnRepository.findAll();
  }

  async findOne(id: number) {
    const reportDccn = await this.reportDccnRepository.findOne(id);
    if (!reportDccn) {
      throw new NotFoundException('ReportDccn not found');
    }
    return reportDccn;
  }

  update(id: number, updateReportDccnDto: UpdateReportDccnDto) {
    return `This action updates a #${id} reportDccn`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportDccn`;
  }
}
