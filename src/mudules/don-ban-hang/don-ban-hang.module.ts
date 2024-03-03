import { Module } from '@nestjs/common';
import { DonBanHangService } from './don-ban-hang.service';
import { DonBanHangController } from './don-ban-hang.controller';

@Module({
  controllers: [DonBanHangController],
  providers: [DonBanHangService],
})
export class DonBanHangModule {}
