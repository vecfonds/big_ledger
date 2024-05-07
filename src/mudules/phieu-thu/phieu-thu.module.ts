import { Module } from '@nestjs/common';
import { PhieuThuService } from './phieu-thu.service';
import {
  PhieuThuTienGuiController,
  PhieuThuTienMatController,
} from './phieu-thu.controller';
import { PhieuThuRepository } from './phieu-thu.repository';

@Module({
  controllers: [PhieuThuTienMatController, PhieuThuTienGuiController],
  providers: [PhieuThuService, PhieuThuRepository],
})
export class PhieuThuModule {}
