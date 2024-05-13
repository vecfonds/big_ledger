import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { AnnouncementRepository } from './announcement.repository';
import { CtbanModule } from '../ctban/ctban.module';
import { DonBanHangModule } from '../don-ban-hang/don-ban-hang.module';

@Module({
  controllers: [AnnouncementController],
  providers: [AnnouncementService, AnnouncementRepository],
  exports: [AnnouncementService],
  imports: [CtbanModule, DonBanHangModule],
})
export class AnnouncementModule {}
