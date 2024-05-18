import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportDtbhService } from './report-dtbh.service';
import { CreateReportDtbhDto } from './dto/create-report-dtbh.dto';
import { UpdateReportDtbhDto } from './dto/update-report-dtbh.dto';

@Controller('report-dtbh')
export class ReportDtbhController {
  constructor(private readonly reportDtbhService: ReportDtbhService) {}

  @Post()
  create(@Body() createReportDtbhDto: CreateReportDtbhDto) {
    return this.reportDtbhService.createRaw(createReportDtbhDto);
  }

  @Post('raw')
  createRaw(@Body() createReportDtbhDto: CreateReportDtbhDto) {
    return this.reportDtbhService.createRaw(createReportDtbhDto);
  }

  @Get()
  findAll() {
    return this.reportDtbhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportDtbhService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDtbhDto: UpdateReportDtbhDto) {
  //   return this.reportDtbhService.update(+id, updateReportDtbhDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportDtbhService.remove(+id);
  // }
}
