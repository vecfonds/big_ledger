import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import {
  DELIVERY_STATUS,
  DOCUMENT_STATUS,
  DeliveryStatusType,
  DocumentStatusType,
  PAYMENT_STATUS,
  PaymentStatusType,
} from 'src/constants';

export class ProductOfDonBanHang {
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

export class CreateDonBanHangDto {
  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'Sale date must be a date string' })
  @IsNotEmpty({ message: 'Sale date is required' })
  saleDate: string;

  @ApiProperty({ example: 'This is content' })
  @IsString({ message: 'Content must be a string' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: PAYMENT_STATUS.NOT_PAID })
  @IsIn(Object.values(PAYMENT_STATUS), {
    message: 'Payment status is not valid',
  })
  @IsOptional()
  paymentStatus?: PaymentStatusType = PAYMENT_STATUS.NOT_PAID;

  @ApiProperty({ example: DELIVERY_STATUS.NOT_DELIVERED })
  @IsIn(Object.values(DELIVERY_STATUS), {
    message: 'Delivery status is not valid',
  })
  @IsOptional()
  deliveryStatus?: DeliveryStatusType = DELIVERY_STATUS.NOT_DELIVERED;

  @ApiProperty({ example: DOCUMENT_STATUS.UNDOCUMENTED })
  @IsIn(Object.values(DOCUMENT_STATUS), {
    message: 'Document status is not valid',
  })
  @IsOptional()
  documentStatus?: DocumentStatusType = DOCUMENT_STATUS.UNDOCUMENTED;

  @ApiProperty({ example: '2021-11-01' })
  @IsDateString(undefined, { message: 'Delivery term must be a date string' })
  @IsNotEmpty({ message: 'Delivery term is required' })
  deliveryTerm: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'salespersonId must be a number' })
  @IsOptional()
  salespersonId: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'customerId must be a number' })
  @IsOptional()
  customerId: number;

  @ApiProperty({
    type: [ProductOfDonBanHang],
    description: 'List of products',
    example: [{ productId: 1, count: 1 }],
  })
  @IsArray({ message: 'Products must be an array' })
  @ArrayNotEmpty({ message: 'Products must not be empty' })
  @IsNotEmpty({ message: 'Products is required' })
  @ValidateNested({
    each: true,
    message: 'Each product must be an object of ProductOfDonBanHang',
  })
  @Type(() => ProductOfDonBanHang)
  products: ProductOfDonBanHang[];
}
