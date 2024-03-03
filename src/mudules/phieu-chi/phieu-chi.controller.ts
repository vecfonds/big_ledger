import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhieuChiService } from './phieu-chi.service';
import { CreatePhieuChiDto } from './dto/create-phieu-chi.dto';
import { UpdatePhieuChiDto } from './dto/update-phieu-chi.dto';

@Controller('phieu-chi')
export class PhieuChiController {
  constructor(private readonly phieuChiService: PhieuChiService) {}

  @Post()
  create(@Body() createPhieuChiDto: CreatePhieuChiDto) {
    return this.phieuChiService.create(createPhieuChiDto);
  }

  @Get()
  findAll() {
    return this.phieuChiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuChiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhieuChiDto: UpdatePhieuChiDto) {
    return this.phieuChiService.update(+id, updatePhieuChiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phieuChiService.remove(+id);
  }
}
