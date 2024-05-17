import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportThcnDto } from './dto/create-report-thcn.dto';
import { UpdateReportThcnDto } from './dto/update-report-thcn.dto';
import { ReportThcnRepository } from './report-thcn.repository';
import { CtbanService } from '../ctban/ctban.service';
import { PAYMENT_STATUS } from 'src/constants';

@Injectable()
export class ReportThcnService {
  constructor(
    private readonly reportThcnRepository: ReportThcnRepository,
    private readonly ctbanService: CtbanService,
  ) {}

  async create(createReportThcnDto: CreateReportThcnDto) {
    const ctbans =
      await this.ctbanService.findByPaymentStatusAndGroupByCustomer([
        PAYMENT_STATUS.NOT_PAID,
        PAYMENT_STATUS.BEING_PAID,
      ]);
    return this.reportThcnRepository.create(createReportThcnDto, ctbans);
  }

  findAll() {
    return this.reportThcnRepository.findAll();
  }

  async findOne(id: number) {
    const report = await this.reportThcnRepository.findOne(id);
    if (!report) {
      throw new NotFoundException('Report not found');
    }
    return report;
  }

  update(id: number, updateReportThcnDto: UpdateReportThcnDto) {
    return `This action updates a #${id} reportThcn`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportThcn`;
  }
}
