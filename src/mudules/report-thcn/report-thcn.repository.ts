import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ReportThcn, ReportThcnDetail } from './entities/report-thcn.entity';
import { ReportThcnDetailType } from './type/report-thcn-detail.type';
import { CreateReportThcnDto } from './dto/create-report-thcn.dto';

@Injectable()
export class ReportThcnRepository {
  private readonly reportThcnRepository: Repository<ReportThcn>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportThcnRepository = this.dataSource.getRepository(ReportThcn);
  }

  async create(
    createReportThcnDto: CreateReportThcnDto,
    reportThcnDetail: ReportThcnDetailType[],
  ) {
    const reportThcn = this.reportThcnRepository.create(createReportThcnDto);
    return this.dataSource.transaction(async (manager) => {
      const newReportThcn = await manager.save(reportThcn);
      await Promise.all(
        reportThcnDetail.map(async (each) => {
          const reportThcnDetail = manager.create(ReportThcnDetail, {
            ...each,
            reportThcn: newReportThcn,
          });
          return manager.save(reportThcnDetail);
        }),
      );
      return newReportThcn;
    });
  }

  findAll() {
    return this.reportThcnRepository.find();
  }

  findOne(id: number) {
    return this.reportThcnRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        reportThcnDetails: {
          customer: true,
        },
      },
    });
  }
}
