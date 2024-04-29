import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class ProductOfCtban {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'Count must be a number' })
  @IsNotEmpty({ message: 'Count is required' })
  @Min(1, { message: 'Count must be greater than or equal to 1' })
  count: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'Product id must be a number' })
  @IsNotEmpty({ message: 'Product id is required' })
  productId: number;
}

export class CreateCtbanDto {
  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'Delivery date must be a date string' })
  @IsNotEmpty({ message: 'NgayNhan is required' })
  deliveryDate: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'WarehouseKeeper id must be a number' })
  @IsNotEmpty({ message: 'WarehouseKeeper id is required' })
  warehouseKeeperId: number;

  @ApiProperty({ example: 'Content' })
  @IsString({ message: 'Content must be a string' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'Nguoi nhan' })
  @IsString({ message: 'Receiver must be a string' })
  @IsNotEmpty({ message: 'Receiver is required' })
  receiver: string;

  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'PaymentTerm must be a string' })
  @IsNotEmpty({ message: 'PaymentTerm is required' })
  paymentTerm: string;

  // @ApiProperty({ example: [1] })
  // @IsNumber(undefined, {
  //   each: true,
  //   message: 'DonMuaHangIds must be an array of numbers',
  // })
  // @IsArray({ message: 'DonMuaHangIds must be an array' })
  // @ArrayNotEmpty({ message: 'DonMuaHangIds must not be empty' })
  // @IsNotEmpty({ message: 'DonMuaHangIds is required' })
  // donBanHangIds: number[];

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'DonBanHang id must be a number' })
  @IsNotEmpty({ message: 'DonBanHang id is required' })
  donBanHangId: number;

  @ApiProperty({
    type: [ProductOfCtban],
    description: 'List of products',
    example: [{ productId: 1, count: 1 }],
  })
  @IsArray({ message: 'Products must be an array' })
  @ArrayNotEmpty({ message: 'Products must not be empty' })
  @IsNotEmpty({ message: 'Products is required' })
  @ValidateNested({
    each: true,
    message: 'Each product must be an object of ProductOfCtban',
  })
  @Type(() => ProductOfCtban)
  products: ProductOfCtban[];
}
