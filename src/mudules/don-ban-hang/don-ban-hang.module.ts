import { Module } from '@nestjs/common';
import { DonBanHangService } from './don-ban-hang.service';
import { DonBanHangController } from './don-ban-hang.controller';
import { DonBanHangRepository } from './don-ban-hang.repository';
import { EmployeeModule } from '../employee/employee.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [DonBanHangController],
  providers: [DonBanHangService, DonBanHangRepository],
  exports: [DonBanHangService],
  imports: [EmployeeModule, CustomerModule],
})
export class DonBanHangModule {}
