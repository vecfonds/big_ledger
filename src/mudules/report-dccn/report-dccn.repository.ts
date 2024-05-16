import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import {
  ReportDccn,
  ReportDccnDetail,
  ReportDccnCustomerDetail,
} from './entities/report-dccn.entity';

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
}
