import { Module } from '@nestjs/common';
import { ReportDccnService } from './report-dccn.service';
import { ReportDccnController } from './report-dccn.controller';
import { ReportDccnRepository } from './report-dccn.repository';
import { CustomerModule } from '../customer/customer.module';
import { CtbanModule } from '../ctban/ctban.module';

@Module({
  controllers: [ReportDccnController],
  providers: [ReportDccnService, ReportDccnRepository],
  imports: [CustomerModule, CtbanModule],
  exports: [ReportDccnService],
})
export class ReportDccnModule {}
