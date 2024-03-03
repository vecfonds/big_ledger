import { Module } from '@nestjs/common';
import { DonMuaHangService } from './don-mua-hang.service';
import { DonMuaHangController } from './don-mua-hang.controller';

@Module({
  controllers: [DonMuaHangController],
  providers: [DonMuaHangService],
})
export class DonMuaHangModule {}
