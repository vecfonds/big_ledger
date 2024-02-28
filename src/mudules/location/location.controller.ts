import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Headers,
  Query,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchByNameDto } from './dto/search-by-name.dto';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('LOCATION')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get('search')
  search(@Query() searchByNameDto: SearchByNameDto) {
    return this.locationService.search(searchByNameDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.locationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(id, updateLocationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.locationService.remove(id);
  }

  @Post(':id/comment')
  addComment(
    @Param('id', ParseIntPipe) locationId: number,
    @Body() addCommentDto: CreateCommentDto,
    @Headers('authorization') bearerToken: string,
  ) {
    const token = bearerToken.split(' ')[1];
    return this.locationService.addComment(token, locationId, addCommentDto);
  }
}
