import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DON_VI, DonViType } from '../../../constants';

export class CreateProductDto {
  @ApiProperty({ example: 'Product A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Description A' })
  @IsString({ message: 'Description is not valid' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @ApiProperty({ example: 1000 })
  @IsNumber(undefined, { message: 'PriceReceived is not valid' })
  @IsNotEmpty({ message: 'PriceReceived is required' })
  priceReceived: number;

  @ApiProperty({ example: 1200 })
  @IsNumber(undefined, { message: 'PriceDelivery is not valid' })
  @IsNotEmpty({ message: 'PriceDelivery is required' })
  priceDelivery: number;

  @ApiProperty({ example: 'Kg' })
  @IsString({ message: 'DonVi is not valid' })
  @IsNotEmpty({ message: 'DonVi is required' })
  @IsIn(Object.values(DON_VI), { message: 'DonVi is not valid' })
  donVi: DonViType;

  @ApiProperty({ example: 1 })
  @IsNumber(undefined, { message: 'SupplierId is not valid' })
  @IsNotEmpty({ message: 'SupplierId is required' })
  productGroupId: number;
}
