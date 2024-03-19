import { PartialType } from '@nestjs/mapped-types';
import {
  CreateSupplierDto,
  CreateSupplierGroupDto,
} from './create-supplier.dto';

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {}

export class UpdateSupplierGroupDto extends PartialType(
  CreateSupplierGroupDto,
) {}
