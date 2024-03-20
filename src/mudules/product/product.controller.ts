import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  CreateProductGroupDto,
} from './dto/create-product.dto';
import {
  UpdateProductDto,
  UpdateProductGroupDto,
} from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doi tuong')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}

@ApiTags('Doi tuong')
@Controller('product-group')
export class ProductGroupController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductGroupDto: CreateProductGroupDto) {
    return this.productService.createGroup(createProductGroupDto);
  }

  @Get()
  findAll() {
    return this.productService.findAllGroup();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOneGroup(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductGroupDto: UpdateProductGroupDto,
  ) {
    return this.productService.updateGroup(+id, updateProductGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.removeGroup(+id);
  }
}
