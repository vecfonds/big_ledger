import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  ReportDccn,
  ReportDccnDetail,
  ReportDccnCustomerDetail,
} from './entities/report-dccn.entity';
import { CreateReportDccnDto } from './dto/create-report-dccn.dto';
import { ReportDccnDetailType } from './type/report-dccn-detail.type';

@Injectable()
export class ReportDccnRepository {
  private readonly reportThcnRepository: Repository<ReportDccn>;
  private readonly reportDccnDetailRepository: Repository<ReportDccnDetail>;
  private readonly reportDccnCustomerDetailRepository: Repository<ReportDccnCustomerDetail>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportThcnRepository = this.dataSource.getRepository(ReportDccn);
    this.reportDccnDetailRepository =
      this.dataSource.getRepository(ReportDccnDetail);
    this.reportDccnCustomerDetailRepository = this.dataSource.getRepository(
      ReportDccnCustomerDetail,
    );
  }

  create(
    createReportDccnDto: CreateReportDccnDto,
    reportDccnDetail: ReportDccnDetailType[],
  ) {
    const reportDccn = this.reportThcnRepository.create(createReportDccnDto);
    return this.dataSource.transaction(async (manager) => {
      const newReportDccn = await manager.save(reportDccn);
      await Promise.all(
        reportDccnDetail.map(async (each) => {
          const reportDccnDetail = manager.create(ReportDccnDetail, {
            ...each,
            reportDccn: newReportDccn,
          });
          const newReportDccnDetail = await manager.save(reportDccnDetail);
          await Promise.all(
            each.ctbans.map(async (each) => {
              const reportDccnCustomerDetail = manager.create(
                ReportDccnCustomerDetail,
                {
                  ...each,
                  reportDccnDetail: newReportDccnDetail,
                },
              );
              return manager.save(reportDccnCustomerDetail);
            }),
          );
        }),
      );
      return newReportDccn;
    });
  }

  findAll() {
    return this.reportThcnRepository.find();
  }

  findOne(id: number) {
    return this.reportThcnRepository.findOne({
      where: { id: id },
      relations: {
        reportDccnDetails: {
          customer: true,
          reportDccnCustomerDetails: {
            ctban: true,
          },
        },
      },
    });
  }

  remove(report: ReportDccn) {
    this.dataSource.transaction(async (manager) => {
      report.reportDccnDetails.forEach(async (reportDccnDetail) => {
        reportDccnDetail.reportDccnCustomerDetails.forEach(
          async (reportDccnCustomerDetail) => {
            await manager.remove(reportDccnCustomerDetail);
          },
        );
        await manager.remove(reportDccnDetail);
      });
      await manager.remove(report);
    });
  }
}
