import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhieuThuService } from './phieu-thu.service';
import { CreatePhieuThuDto } from './dto/create-phieu-thu.dto';
import { UpdatePhieuThuDto } from './dto/update-phieu-thu.dto';

@Controller('phieu-thu')
export class PhieuThuController {
  constructor(private readonly phieuThuService: PhieuThuService) {}

  @Post()
  create(@Body() createPhieuThuDto: CreatePhieuThuDto) {
    return this.phieuThuService.create(createPhieuThuDto);
  }

  @Get()
  findAll() {
    return this.phieuThuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuThuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhieuThuDto: UpdatePhieuThuDto) {
    return this.phieuThuService.update(+id, updatePhieuThuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phieuThuService.remove(+id);
  }
}
