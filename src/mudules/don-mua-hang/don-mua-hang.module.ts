import { Module } from '@nestjs/common';
import { DonMuaHangService } from './don-mua-hang.service';
import { DonMuaHangController } from './don-mua-hang.controller';
import { DonMuaHangRepository } from './don-mua-hang.repository';

@Module({
  controllers: [DonMuaHangController],
  providers: [DonMuaHangService, DonMuaHangRepository],
})
export class DonMuaHangModule {}
