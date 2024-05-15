import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto, CreateProductGroupDto } from './create-product.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ type: Number, default: 100 })
  @IsNumber(undefined, { message: 'category must be a number' })
  @IsOptional()
  category: number;
}

export class UpdateProductGroupDto extends PartialType(CreateProductGroupDto) {}
