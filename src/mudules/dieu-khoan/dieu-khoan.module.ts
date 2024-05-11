import { Module } from '@nestjs/common';
import { DieuKhoanService } from './dieu-khoan.service';
import { DieuKhoanController } from './dieu-khoan.controller';
import { DieuKhoanRepository } from './dieu-khoan.repositoy';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [DieuKhoanController],
  providers: [DieuKhoanService, DieuKhoanRepository, CustomerModule],
  exports: [DieuKhoanService],
})
export class DieuKhoanModule {}
