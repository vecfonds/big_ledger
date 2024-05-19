import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ReportDtbh } from './entities/report-dtbh.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateReportDtbhDto } from './dto/create-report-dtbh.dto';
import { ReportDtbhDetailType } from './type/report-dtbh.type';
import { Salesperson } from '../employee/entities/employee.entity';

@Injectable()
export class ReportDtbhRepository {
  private readonly reportDtbhRepository: Repository<ReportDtbh>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportDtbhRepository = this.dataSource.getRepository(ReportDtbh);
  }

  create(
    createReportDtbhDto: CreateReportDtbhDto,
    reportDtbnDetail: ReportDtbhDetailType,
    salesperson: Salesperson,
  ) {
    const reportDtbh = this.reportDtbhRepository.create({
      ...createReportDtbhDto,
      productValuetotal: reportDtbnDetail.totalProductValue,
      discountValueTotal: reportDtbnDetail.totalDiscountValue,
      salesperson: salesperson,
      ctbans: reportDtbnDetail.ctbans,
    });
    return this.reportDtbhRepository.save(reportDtbh);
  }

  findAll() {
    return this.reportDtbhRepository.find();
  }

  findOne(id: number) {
    return this.reportDtbhRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        salesperson: true,
        ctbans: true,
      },
    });
  }
}
