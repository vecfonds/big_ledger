import { Module } from '@nestjs/common';
import { DieuKhoanService } from './dieu-khoan.service';
import { DieuKhoanController } from './dieu-khoan.controller';
import { DieuKhoanRepository } from './dieu-khoan.repositoy';

@Module({
  controllers: [DieuKhoanController],
  providers: [DieuKhoanService, DieuKhoanRepository],
  exports: [DieuKhoanService],
})
export class DieuKhoanModule {}
