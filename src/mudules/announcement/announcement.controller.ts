import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { GetAnnouncementDto } from './dto/get-announcement.dto';

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  findAll(@Query() getAnnouncementDto: GetAnnouncementDto) {
    return this.announcementService.findAll(getAnnouncementDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementService.findOne(+id);
  }
}
