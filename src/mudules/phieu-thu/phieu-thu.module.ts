import { Module } from '@nestjs/common';
import { PhieuThuService } from './phieu-thu.service';
import {
  PhieuThuTienGuiController,
  PhieuThuTienMatController,
} from './phieu-thu.controller';
import { PhieuThuRepository } from './phieu-thu.repository';
import { CustomerModule } from '../customer/customer.module';
import { EmployeeModule } from '../employee/employee.module';
import { CtbanModule } from '../ctban/ctban.module';
import { BankAccountModule } from '../bank-account/bank-account.module';

@Module({
  controllers: [PhieuThuTienMatController, PhieuThuTienGuiController],
  providers: [PhieuThuService, PhieuThuRepository],
  imports: [CustomerModule, EmployeeModule, CtbanModule, BankAccountModule],
  exports: [PhieuThuService],
})
export class PhieuThuModule {}
