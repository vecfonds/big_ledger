import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import {
  PAYMENT_STATUS,
  PaymentStatusType,
  DELIVERY_STATUS,
  DeliveryStatusType,
  DOCUMENT_STATUS,
  DocumentStatusType,
} from 'src/constants';

export class CreateDonMuaHangDto {
  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'NgayNhan must be a date string' })
  @IsNotEmpty({ message: 'NgayNhan is required' })
  ngayMua: string;

  @ApiProperty({ example: 'This is content' })
  @IsDateString(undefined, { message: 'Content must be a date string' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'NOT_PAID' })
  @IsIn(Object.values(PAYMENT_STATUS), {
    message: 'Payment status is not valid',
  })
  @IsOptional()
  paymentStatus?: PaymentStatusType = PAYMENT_STATUS.NOT_PAID;

  @ApiProperty({ example: 'NOT_DELIVERED' })
  @IsIn(Object.values(DELIVERY_STATUS), {
    message: 'Delivery status is not valid',
  })
  @IsOptional()
  deliveryStatus?: DeliveryStatusType = DELIVERY_STATUS.NOT_DELIVERED;

  @ApiProperty({ example: 'UNDOCUMENTED' })
  @IsIn(Object.values(DOCUMENT_STATUS), {
    message: 'Document status is not valid',
  })
  @IsOptional()
  documentStatus?: DocumentStatusType = DOCUMENT_STATUS.UNDOCUMENTED;

  @ApiProperty({ example: '2021-11-01' })
  @IsDateString(undefined, { message: 'Han Giao Hang must be a date string' })
  @IsNotEmpty({ message: 'Han Giao Hang is required' })
  hanGiaoHang: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'purchasingOfficerId must be a number' })
  @IsOptional()
  purchasingOfficerId: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'supplierId must be a number' })
  @IsOptional()
  supplierId: number;
}
