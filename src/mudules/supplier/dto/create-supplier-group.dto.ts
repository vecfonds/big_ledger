import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSupplierGroupDto {
  @ApiProperty({ example: 'Nhom nha cun cap A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Description A' })
  @IsString({ message: 'Description is not valid' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
