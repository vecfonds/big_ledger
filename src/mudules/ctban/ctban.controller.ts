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
import { CtbanService } from './ctban.service';
import { CreateCtbanDto } from './dto/create-ctban.dto';
import { UpdateCtbanDto } from './dto/update-ctban.dto';
import { GetCtbanDto } from './dto/get-ctban.dto';
import { FilterByDateDto } from 'src/common/dto/filter-by-date.dto';

@Controller('ctban')
export class CtbanController {
  constructor(private readonly ctbanService: CtbanService) {}

  @Post()
  create(@Body() createCtbanDto: CreateCtbanDto) {
    return this.ctbanService.create(createCtbanDto);
  }

  @Get()
  findAll(@Query() query: GetCtbanDto) {
    return this.ctbanService.findAll(query);
  }

  @Post('report-by-product')
  reportByProduct(@Body() query: FilterByDateDto) {
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    return this.ctbanService.findAndGroupByProduct(startDate, endDate);
  }

  @Get('report-revenue-of-year/:year')
  reportRevenue(@Param('year') year: string) {
    return this.ctbanService.reportRevenueOfYear(+year);
  }

  @Get('report-revenue-of-quarter/:year/:quarter')
  reportRevenueOfQuarter(
    @Param('year') year: string,
    @Param('quarter') quarter: string,
  ) {
    return this.ctbanService.reportRevenueOfQuarter(+year, +quarter);
  }

  @Get('report-revenue-of-month/:year/:month')
  reportRevenueOfMonth(
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return this.ctbanService.reportRevenueOfMonth(+year, +month);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ctbanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCtbanDto: UpdateCtbanDto) {
    return this.ctbanService.update(+id, updateCtbanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ctbanService.remove(+id);
  }
}
