import { PartialType } from '@nestjs/mapped-types';
import {
  CreateCustomerDto,
  CreateCustomerGroupDto,
} from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

export class UpdateCustomerGroupDto extends PartialType(
  CreateCustomerGroupDto,
) {}
