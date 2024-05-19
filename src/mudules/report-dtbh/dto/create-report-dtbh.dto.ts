import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsArray,
  IsString,
  IsNumber,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateReportDtbhDto {
  @ApiProperty({ type: 'date', example: '2021-09-01' })
  @IsDateString(undefined, { message: 'Ngày bắt đầu không hợp lệ' })
  @IsNotEmpty({ message: 'Ngày bắt đầu không được để trống' })
  startDate: Date;

  @ApiProperty({ type: 'date', example: '2021-09-30' })
  @IsDateString(undefined, { message: 'Ngày kết thúc không hợp lệ' })
  @IsNotEmpty({ message: 'Ngày kết thúc không được để trống' })
  endDate: Date;

  @ApiProperty({ type: 'string', example: 'Báo cáo DCCN tháng 9' })
  @IsNotEmpty({ message: 'Tên báo cáo không được để trống' })
  @IsString({ message: 'Tên báo cáo không hợp lệ' })
  name: string;

  @ApiProperty({ type: 'string', example: 'Báo cáo DCCN tháng 9' })
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  @IsString({ message: 'Mô tả không hợp lệ' })
  description: string;

  @ApiProperty({ type: 'array', example: [1, 2] })
  @IsArray({ message: 'Danh sách nhân viên không hợp lệ' })
  @IsNotEmpty({ message: 'Danh sách nhân viên không được để trống' })
  @IsNumber({}, { each: true, message: 'Id nhân viên không hợp lệ' })
  salespersonIds: number[];
}
