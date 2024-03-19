import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SupplierService } from './supplier.service';
import {
  CreateSupplierDto,
  CreateSupplierGroupDto,
} from './dto/create-supplier.dto';
import {
  UpdateSupplierDto,
  UpdateSupplierGroupDto,
} from './dto/update-supplier.dto';

@ApiTags('Doi tuong')
@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.supplierService.create(createSupplierDto);
  }

  @Get()
  findAll() {
    return this.supplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.supplierService.update(+id, updateSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierService.remove(+id);
  }
}

@Controller('supplier-group')
export class SupplierGroupController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  create(@Body() createSupplierGroupDto: CreateSupplierGroupDto) {
    return this.supplierService.createGroup(createSupplierGroupDto);
  }

  @Get()
  findAll() {
    return this.supplierService.findAllGroup();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierService.findOneGroup(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierGroupDto: UpdateSupplierGroupDto,
  ) {
    return this.supplierService.updateGroup(+id, updateSupplierGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierService.removeGroup(+id);
  }
}
