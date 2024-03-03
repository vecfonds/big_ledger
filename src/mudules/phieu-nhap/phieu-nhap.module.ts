import { Module } from '@nestjs/common';
import { PhieuNhapService } from './phieu-nhap.service';
import { PhieuNhapController } from './phieu-nhap.controller';

@Module({
  controllers: [PhieuNhapController],
  providers: [PhieuNhapService],
})
export class PhieuNhapModule {}
