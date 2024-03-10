import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountantDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateAccountantDto) {}
