import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { AnnouncementRepository } from './announcement.repository';

@Module({
  controllers: [AnnouncementController],
  providers: [AnnouncementService, AnnouncementRepository],
  exports: [AnnouncementService],
})
export class AnnouncementModule {}
