import { Module } from '@nestjs/common';
import { DonBanHangService } from './don-ban-hang.service';
import { DonBanHangController } from './don-ban-hang.controller';
import { DonBanHangRepository } from './don-ban-hang.repository';
import { EmployeeModule } from '../employee/employee.module';
import { CustomerModule } from '../customer/customer.module';
import { ProductModule } from '../product/product.module';
import { DieuKhoanModule } from '../dieu-khoan/dieu-khoan.module';
import { CktmModule } from '../cktm/cktm.module';

@Module({
  controllers: [DonBanHangController],
  providers: [DonBanHangService, DonBanHangRepository],
  exports: [DonBanHangService],
  imports: [
    EmployeeModule,
    CustomerModule,
    ProductModule,
    DieuKhoanModule,
    CktmModule,
  ],
})
export class DonBanHangModule {}
