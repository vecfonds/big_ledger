import { Module } from '@nestjs/common';
import { PhieuChiService } from './phieu-chi.service';
import { PhieuChiController } from './phieu-chi.controller';

@Module({
  controllers: [PhieuChiController],
  providers: [PhieuChiService],
})
export class PhieuChiModule {}
