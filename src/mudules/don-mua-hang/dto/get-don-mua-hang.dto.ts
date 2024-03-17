import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class GetDonMuaHangDto {
  @ApiProperty({ type: Number, example: 1 })
  // @IsNumberString(undefined, { message: 'Current page size must be a number' })
  @Transform(({ value }) => parseInt(value))
  @IsNumber(undefined, { message: 'Current page size must be a number' })
  @Min(1)
  @IsOptional()
  currentPage?: number;

  @ApiProperty({ type: Number, example: 20 })
  // @IsNumberString(undefined, { message: 'Page size must be a number' })
  @Transform(({ value }) => parseInt(value))
  @IsNumber(undefined, { message: 'Page size must be a number' })
  @Min(1)
  @Max(50)
  @IsOptional()
  pageSize?: number;
}
