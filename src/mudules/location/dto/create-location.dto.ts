import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Address must be a string' })
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Image must be a string' })
  @IsNotEmpty({ message: 'Image is required' })
  image: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'QrCode must be a string' })
  @IsNotEmpty({ message: 'QrCode is required' })
  qrCode: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'City must be a string' })
  @IsNotEmpty({ message: 'City is required' })
  city: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'District must be a string' })
  @IsNotEmpty({ message: 'District is required' })
  district: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Country must be a string' })
  @IsNotEmpty({ message: 'Country is required' })
  country: string;

  @ApiProperty({ example: 'string' })
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @ApiProperty({ example: 1 })
  @IsNumber(undefined, { message: 'Rate must be a number' })
  @IsNotEmpty({ message: 'Rate is required' })
  rate: number;
}
