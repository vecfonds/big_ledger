import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto, CreateProductGroupDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}

export class UpdateProductGroupDto extends PartialType(CreateProductGroupDto) {}
