import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDieuKhoanDto {
  @ApiProperty({ example: 'name' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'description' })
  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({ example: 5 })
  @IsNumber({}, { message: 'PaymentPeriod must be a number' })
  @IsNotEmpty({ message: 'PaymentPeriod is required' })
  paymentPeriod: number;

  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: 'MinOrderQuantity must be a number' })
  @IsNotEmpty({ message: 'MinOrderQuantity is required' })
  minOrderQuantity: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'CustomerId must be a number' })
  @IsNotEmpty({ message: 'CustomerId is required' })
  customerId: number;
}
