import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PAYMENT_METHOD, PaymentMethodType } from 'src/constants';

export class CreateCtbanDto {
  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'Delivery date must be a date string' })
  @IsNotEmpty({ message: 'NgayNhan is required' })
  deliveryDate: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'WarehouseKeeper id must be a number' })
  @IsNotEmpty({ message: 'WarehouseKeeper id is required' })
  warehouseKeeperId: number;

  @ApiProperty({ example: PAYMENT_METHOD.CASH, enum: PAYMENT_METHOD })
  @IsIn(Object.values(PAYMENT_METHOD), {
    message: 'PaymentMethod is not valid',
  })
  @IsNotEmpty({ message: 'PaymentMethod is required' })
  paymentMethod: PaymentMethodType;

  @ApiProperty({ example: 'Content' })
  @IsString({ message: 'Content must be a string' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'Nguoi nhan' })
  @IsString({ message: 'Receiver must be a string' })
  @IsNotEmpty({ message: 'Receiver is required' })
  receiver: string;

  @ApiProperty({ example: [1] })
  @IsNumber(undefined, {
    each: true,
    message: 'DonMuaHangIds must be an array of numbers',
  })
  @IsArray({ message: 'DonMuaHangIds must be an array' })
  @ArrayNotEmpty({ message: 'DonMuaHangIds must not be empty' })
  @IsNotEmpty({ message: 'DonMuaHangIds is required' })
  donBanHangIds: number[];
}
