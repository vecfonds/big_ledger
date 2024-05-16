import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ReportThcn } from './entities/report-thcn.entity';

@Injectable()
export class ReportThcnRepository {
  private readonly reportThcnRepository: Repository<ReportThcn>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportThcnRepository = this.dataSource.getRepository(ReportThcn);
  }
}
