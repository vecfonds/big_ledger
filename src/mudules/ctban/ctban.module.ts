import { Module } from '@nestjs/common';
import { CtbanService } from './ctban.service';
import { CtbanController } from './ctban.controller';
import { CtbanRepository } from './ctban.repository';
import { EmployeeModule } from '../employee/employee.module';
import { DonBanHangModule } from '../don-ban-hang/don-ban-hang.module';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [CtbanController],
  providers: [CtbanService, CtbanRepository],
  exports: [CtbanService],
  imports: [EmployeeModule, DonBanHangModule, ProductModule],
})
export class CtbanModule {}
