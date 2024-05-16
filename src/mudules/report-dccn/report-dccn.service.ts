import { Injectable } from '@nestjs/common';
import { CreateReportDccnDto } from './dto/create-report-dccn.dto';
import { UpdateReportDccnDto } from './dto/update-report-dccn.dto';
import { ReportDccnRepository } from './report-dccn.repository';

@Injectable()
export class ReportDccnService {
  constructor(private readonly reportDccnRepository: ReportDccnRepository) {}

  create(createReportDccnDto: CreateReportDccnDto) {
    return 'This action adds a new reportDccn';
  }

  findAll() {
    return `This action returns all reportDccn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportDccn`;
  }

  update(id: number, updateReportDccnDto: UpdateReportDccnDto) {
    return `This action updates a #${id} reportDccn`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportDccn`;
  }
}
