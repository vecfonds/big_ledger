import { Module } from '@nestjs/common';
import { PhieuXuatService } from './phieu-xuat.service';
import { PhieuXuatController } from './phieu-xuat.controller';

@Module({
  controllers: [PhieuXuatController],
  providers: [PhieuXuatService],
})
export class PhieuXuatModule {}
