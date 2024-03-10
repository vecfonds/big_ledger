import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

abstract class CreateEmployeeDto {
  @ApiProperty({ example: 'Accountant A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'email@example.com' })
  @IsEmail({}, { message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: '123456789' })
  @IsString({ message: 'Phone is not valid' })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @ApiProperty({ example: 'Address A' })
  @IsString({ message: 'Address is not valid' })
  @IsNotEmpty({ message: 'Address is required' })
  address: string;
}

export class CreateAccountantDto extends CreateEmployeeDto {
  @ApiProperty({ example: 'password' })
  @IsString({ message: 'Password is not valid' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password is too short' })
  password: string;

  @ApiProperty({ example: 'avatar' })
  @IsString({ message: 'Avatar is not valid' })
  @IsOptional()
  avatar: string;
}

export class CreateSalespersonDto extends CreateEmployeeDto {}

export class CreatePurchasingOfficerDto extends CreateEmployeeDto {}
