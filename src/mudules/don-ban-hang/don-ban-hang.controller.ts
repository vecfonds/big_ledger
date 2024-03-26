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
import { DonBanHangService } from './don-ban-hang.service';
import { CreateDonBanHangDto } from './dto/create-don-ban-hang.dto';
import { UpdateDonBanHangDto } from './dto/update-don-ban-hang.dto';
import { GetDonBanHangDto } from './dto/get-don-ban-hang.dto';

@Controller('don-ban-hang')
export class DonBanHangController {
  constructor(private readonly donBanHangService: DonBanHangService) {}

  @Post()
  create(@Body() createDonBanHangDto: CreateDonBanHangDto) {
    return this.donBanHangService.create(createDonBanHangDto);
  }

  @Get()
  findAll(@Query() query: GetDonBanHangDto) {
    return this.donBanHangService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donBanHangService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDonBanHangDto: UpdateDonBanHangDto,
  ) {
    return this.donBanHangService.update(+id, updateDonBanHangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donBanHangService.remove(+id);
  }
}
