import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({ example: 'Cong Ty A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Description A' })
  @IsString({ message: 'Description is not valid' })
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @IsString({ message: 'Representative is not valid' })
  @IsNotEmpty({ message: 'Representative is required' })
  representative: string;

  @ApiProperty({ example: '0123456789' })
  @IsString({ message: 'Phone number is not valid' })
  @IsNotEmpty({ message: 'Phone number is required' })
  phoneNumber: string;

  @ApiProperty({ example: 'email@example.com' })
  @IsEmail(undefined, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: 'Address A' })
  @IsString({ message: 'Address is not valid' })
  @IsOptional()
  address?: string;

  @ApiProperty({ example: '123456789' })
  @IsString({ message: 'Account number is not valid' })
  @IsNotEmpty({ message: 'Account number is required' })
  accountNumber: string;

  @ApiProperty({ example: 'Account name A' })
  @IsString({ message: 'Account name is not valid' })
  @IsNotEmpty({ message: 'Account name is required' })
  accountName: string;

  @ApiProperty({ example: 'Bank name A' })
  @IsString({ message: 'Bank name is not valid' })
  @IsNotEmpty({ message: 'Bank name is required' })
  bankName: string;

  @ApiProperty({ example: 'Branch A' })
  @IsString({ message: 'Branch is not valid' })
  @IsOptional()
  branch?: string;

  @ApiProperty({ example: 1 })
  @IsNumber(undefined, { message: 'Supplier group id is not valid' })
  @IsNotEmpty({ message: 'Supplier group id is required' })
  supplierGroupId: number;
}

export class CreateSupplierGroupDto {
  @ApiProperty({ example: 'Nhom nha cung cap A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Description A' })
  @IsString({ message: 'Description is not valid' })
  @IsOptional()
  description?: string;
}
