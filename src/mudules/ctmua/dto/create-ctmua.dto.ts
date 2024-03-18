import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PAYMENT_METHOD, PaymentMethodType } from 'src/constants';

export class CreateCtmuaDto {
  @ApiProperty({ example: '2021-09-01' })
  @IsDateString(undefined, { message: 'NgayNhan must be a date string' })
  @IsNotEmpty({ message: 'NgayNhan is required' })
  ngayNhan: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'NguoiNhanHang must be a number' })
  @IsOptional()
  nguoiNhanHangId: number;

  @ApiProperty({ example: 'CASH' })
  @IsIn(Object.values(PAYMENT_METHOD), {
    message: 'PaymentMethod is not valid',
  })
  @IsNotEmpty({ message: 'PaymentMethod is required' })
  paymentMethod: PaymentMethodType;

  @ApiProperty({ example: 'Noi dung' })
  @IsString({ message: 'NoiDung must be a string' })
  @IsOptional()
  noiDung?: string;

  @ApiProperty({ example: 'Nguoi giao' })
  @IsString({ message: 'NguoiGiao must be a string' })
  @IsNotEmpty({ message: 'NguoiGiao is required' })
  nguoiGiao: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'DonMuaHang must be a number' })
  @IsNotEmpty({ message: 'DonMuaHang is required' })
  donMuaHangId: number;
}
