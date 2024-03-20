import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  CUSTOMER_STATUS,
  CustomerStatusType,
} from 'src/constants/customer-status';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Customer A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: '0123456789' })
  @IsString({ message: 'Phone is not valid' })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @ApiProperty({ example: 'email@example.com' })
  @IsEmail({}, { message: 'Email is not valid' })
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 'Address A' })
  @IsString({ message: 'Address is not valid' })
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'Note A' })
  @IsString({ message: 'Note is not valid' })
  @IsOptional()
  note?: string;

  @ApiProperty({ example: 'Active' })
  @IsString({ message: 'Status is not valid' })
  @IsNotEmpty({ message: 'Status is required' })
  @IsIn(Object.values(CUSTOMER_STATUS), { message: 'Status is not valid' })
  status: CustomerStatusType;

  @ApiProperty({ example: 1 })
  @IsNotEmpty({ message: 'Customer group is required' })
  @IsNumber({}, { message: 'Customer group is not valid' })
  customerGroupId: number;
}

export class CreateCustomerGroupDto {
  @ApiProperty({ example: 'Group A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Note A' })
  @IsString({ message: 'Note is not valid' })
  @IsOptional()
  note?: string;
}
