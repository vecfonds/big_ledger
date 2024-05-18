import { Module } from '@nestjs/common';
import { ReportDtbhService } from './report-dtbh.service';
import { ReportDtbhController } from './report-dtbh.controller';
import { ReportDtbhRepository } from './report-dtbn.repository';
import { CtbanModule } from '../ctban/ctban.module';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  controllers: [ReportDtbhController],
  providers: [ReportDtbhService, ReportDtbhRepository],
  imports: [CtbanModule, EmployeeModule],
  exports: [ReportDtbhService],
})
export class ReportDtbhModule {}
