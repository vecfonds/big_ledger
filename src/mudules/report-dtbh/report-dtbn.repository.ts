import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ReportDtbh, ReportDtbhDetail } from './entities/report-dtbh.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateReportDtbhDto } from './dto/create-report-dtbh.dto';
import { ReportDtbhDetailType } from './type/report-dtbh.type';
import { Salesperson } from '../employee/entities/employee.entity';

@Injectable()
export class ReportDtbhRepository {
  private readonly reportDtbhRepository: Repository<ReportDtbh>;
  private readonly reportDtbhDetailRepository: Repository<ReportDtbhDetail>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportDtbhRepository = this.dataSource.getRepository(ReportDtbh);
    this.reportDtbhDetailRepository =
      this.dataSource.getRepository(ReportDtbhDetail);
  }

  create(
    createReportDtbhDto: CreateReportDtbhDto,
    reportDtbnDetail: ReportDtbhDetailType[],
  ) {
    const reportDtbh = this.reportDtbhRepository.create({
      ...createReportDtbhDto,
    });
    return this.dataSource.manager.transaction(async (manager) => {
      const newReport = await manager.save(reportDtbh);
      const reportDtbnDetailEntity = await Promise.all(
        reportDtbnDetail.map(async (detail) => {
          const reportDtbnDetail = this.reportDtbhDetailRepository.create({
            ...detail,
            reportDtbh: newReport,
          });
          return manager.save(reportDtbnDetail);
        }),
      );
    });
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
        reportDtbhDetails: {
          ctbans: true,
          salesperson: true,
        },
      },
    });
  }
}
