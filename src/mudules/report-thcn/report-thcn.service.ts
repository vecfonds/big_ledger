import { Injectable } from '@nestjs/common';
import { CreateReportThcnDto } from './dto/create-report-thcn.dto';
import { UpdateReportThcnDto } from './dto/update-report-thcn.dto';
import { ReportThcnRepository } from './report-thcn.repository';

@Injectable()
export class ReportThcnService {
  constructor(private readonly reportThcnRepository: ReportThcnRepository) {}

  create(createReportThcnDto: CreateReportThcnDto) {
    return 'This action adds a new reportThcn';
  }

  findAll() {
    return `This action returns all reportThcn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reportThcn`;
  }

  update(id: number, updateReportThcnDto: UpdateReportThcnDto) {
    return `This action updates a #${id} reportThcn`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportThcn`;
  }
}
