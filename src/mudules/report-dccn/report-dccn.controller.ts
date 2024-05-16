import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReportDccnService } from './report-dccn.service';
import { CreateReportDccnDto } from './dto/create-report-dccn.dto';
import { UpdateReportDccnDto } from './dto/update-report-dccn.dto';

@Controller('report-dccn')
export class ReportDccnController {
  constructor(private readonly reportDccnService: ReportDccnService) {}

  @Post()
  create(@Body() createReportDccnDto: CreateReportDccnDto) {
    return this.reportDccnService.create(createReportDccnDto);
  }

  @Get()
  findAll() {
    return this.reportDccnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportDccnService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReportDccnDto: UpdateReportDccnDto) {
  //   return this.reportDccnService.update(+id, updateReportDccnDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.reportDccnService.remove(+id);
  // }
}
