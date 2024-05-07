import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhieuThuService } from './phieu-thu.service';
import { CreatePhieuThuDto } from './dto/create-phieu-thu.dto';
import { UpdatePhieuThuDto } from './dto/update-phieu-thu.dto';

@Controller('phieu-thu-tien-mat')
export class PhieuThuTienMatController {
  constructor(private readonly phieuThuService: PhieuThuService) {}

  @Post()
  create(@Body() createPhieuThuDto: CreatePhieuThuDto) {
    return this.phieuThuService.createTienMat(createPhieuThuDto);
  }

  @Get()
  findAll() {
    return this.phieuThuService.findAllTienMat();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuThuService.findOneTienMat(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePhieuThuDto: UpdatePhieuThuDto,
  // ) {
  //   return this.phieuThuService.updateTienMat(+id, updatePhieuThuDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.phieuThuService.removeTienMat(+id);
  // }
}

@Controller('phieu-thu-tien-gui')
export class PhieuThuTienGuiController {
  constructor(private readonly phieuThuService: PhieuThuService) {}

  @Post()
  create(@Body() createPhieuThuDto: CreatePhieuThuDto) {
    return this.phieuThuService.createTienGui(createPhieuThuDto);
  }

  @Get()
  findAll() {
    return this.phieuThuService.findAllTienGui();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phieuThuService.findOneTienGui(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePhieuThuDto: UpdatePhieuThuDto,
  // ) {
  //   return this.phieuThuService.updateTienGui(+id, updatePhieuThuDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.phieuThuService.removeTienGui(+id);
  // }
}
