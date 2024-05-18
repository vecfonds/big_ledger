import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ReportDtbh } from './entities/report-dtbh.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateReportDtbhDto } from './dto/create-report-dtbh.dto';

@Injectable()
export class ReportDtbhRepository {
  private readonly reportDtbhRepository: Repository<ReportDtbh>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.reportDtbhRepository = this.dataSource.getRepository(ReportDtbh);
  }

  create(createReportDtbhDto: CreateReportDtbhDto) {
    const reportDtbh = this.reportDtbhRepository.create(createReportDtbhDto);
    return this.dataSource.transaction(async (manager) => {
      return manager.save(reportDtbh);
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
        salesperson: true,
        ctbans: true,
      },
    });
  }
}
