import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({ example: 'Cong Ty A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @IsString({ message: 'NguoiDaiDien is not valid' })
  @IsNotEmpty({ message: 'NguoiDaiDien is required' })
  nguoiDaiDien: string;

  @ApiProperty({ example: '0123456789' })
  @IsString({ message: 'Phone is not valid' })
  @IsNotEmpty({ message: 'Phone is required' })
  sdt: string;

  @ApiProperty({ example: 'email@example.com' })
  @IsEmail(undefined, { message: 'Email is not valid' })
  @IsString({ message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: 1 })
  @IsNumber(undefined, { message: 'SupplierGroupId is not valid' })
  @IsNotEmpty({ message: 'SupplierGroupId is required' })
  supplierGroupId: number;
}
