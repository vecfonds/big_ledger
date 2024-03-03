import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductGroupDto {
  @ApiProperty({ example: 'Product Group A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Description A' })
  @IsString({ message: 'Description is not valid' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({ example: 8 })
  @IsNumber(undefined, { message: 'Thue is not valid' })
  @IsNotEmpty({ message: 'Thue is required' })
  thue: number;
}
