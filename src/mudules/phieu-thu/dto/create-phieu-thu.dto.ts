import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

class ChungTuCuaPhieuThuDto {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'Số tiền không hợp lệ' })
  @IsNotEmpty({ message: 'Số tiền không được để trống' })
  money: number;

  @ApiProperty({ example: 'Nội dung' })
  @IsString({ message: 'Nội dung không hợp lệ' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'ID ctu bán không hợp lệ' })
  @IsNotEmpty({ message: 'ID ctu bán không được để trống' })
  ctbanId: number;
}

export class CreatePhieuThuTienMatDto {
  @ApiProperty({ example: '2024-05-08' })
  @IsDateString(undefined, { message: 'Ngày nhận không hợp lệ' })
  @IsNotEmpty({ message: 'Ngày nhận không được để trống' })
  receiveDate: Date;

  @ApiProperty({ example: 'Nội dung' })
  @IsString({ message: 'Nội dung không hợp lệ' })
  @IsOptional()
  content?: string;

  @ApiProperty({ example: 'Người nộp' })
  @IsString({ message: 'Người nộp không hợp lệ' })
  @IsOptional()
  submitter?: string;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'ID Khách hàng không hợp lệ' })
  @IsNotEmpty({ message: 'ID Khách hàng không được để trống' })
  customerId: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'ID Nhân viên không hợp lệ' })
  @IsNotEmpty({ message: 'ID Nhân viên không được để trống' })
  salespersonID: number;

  @ApiProperty({
    type: [ChungTuCuaPhieuThuDto],
    description: 'List of products',
    example: [{ money: 1000, content: 'Nội dung', ctbanId: 1 }],
  })
  @IsArray({ message: 'Chungtu must be an array' })
  @ArrayNotEmpty({ message: 'Chungtu must not be empty' })
  @IsNotEmpty({ message: 'Chungtu is required' })
  @ValidateNested({
    each: true,
    message: 'Each chungtu must be an object of ProductOfDonBanHang',
  })
  @Type(() => ChungTuCuaPhieuThuDto)
  chungTuDto: ChungTuCuaPhieuThuDto[];
}

export class CreatePhieuThuTienGuiDto extends CreatePhieuThuTienMatDto {
  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'ID tài khoản ngân hàng không hợp lệ' })
  @IsNotEmpty({ message: 'ID tài khoản ngân hàng không được để trống' })
  bankAccountId?: number;
}
