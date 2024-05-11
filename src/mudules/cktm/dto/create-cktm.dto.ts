import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCktmDto {
  @ApiProperty({ example: 'CKTM1' })
  @IsString({ message: 'Tên chương trình khuyến mãi không hợp lệ' })
  @IsNotEmpty({ message: 'Tên chương trình khuyến mãi không được để trống' })
  name: string;

  @ApiProperty({ example: 'Chương trình khuyến mãi 1' })
  @IsString({ message: 'Mô tả không hợp lệ' })
  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description: string;

  @ApiProperty({ example: 1000000 })
  @IsNumber({}, { message: 'Giá trị sản phẩm tối thiểu không hợp lệ' })
  @IsNotEmpty({ message: 'Giá trị sản phẩm tối thiểu không được để trống' })
  minProductValue: number;

  @ApiProperty({ example: 10 })
  @IsNumber({}, { message: 'Giảm giá không hợp lệ' })
  @IsNotEmpty({ message: 'Giảm giá không được để trống' })
  discountRate: number;

  @ApiProperty({ example: 1 })
  @IsNumber({}, { message: 'ID khách hàng không hợp lệ' })
  @IsNotEmpty({ message: 'ID khách hàng không được để trống' })
  customerId: number;
}
