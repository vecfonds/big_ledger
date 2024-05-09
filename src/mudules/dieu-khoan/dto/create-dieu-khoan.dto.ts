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

  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: 'Discount must be a number' })
  @IsNotEmpty({ message: 'Discount is required' })
  discount: number;

  @ApiProperty({ example: 30 })
  @IsNumber({}, { message: 'Credit period must be a number' })
  @IsNotEmpty({ message: 'Credit period is required' })
  creditPeriod: number;

  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: 'Discount period must be a number' })
  @IsNotEmpty({ message: 'Discount period is required' })
  discountPeriod: number;
}
