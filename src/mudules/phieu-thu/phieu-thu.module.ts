import { Module } from '@nestjs/common';
import { PhieuThuService } from './phieu-thu.service';
import { PhieuThuController } from './phieu-thu.controller';

@Module({
  controllers: [PhieuThuController],
  providers: [PhieuThuService],
})
export class PhieuThuModule {}
