import { Module } from '@nestjs/common';
import { ReportThcnService } from './report-thcn.service';
import { ReportThcnController } from './report-thcn.controller';
import { ReportThcnRepository } from './report-thcn.repository';
import { CtbanModule } from '../ctban/ctban.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [ReportThcnController],
  providers: [ReportThcnService, ReportThcnRepository],
  imports: [CtbanModule, CustomerModule],
  exports: [ReportThcnService],
})
export class ReportThcnModule {}
