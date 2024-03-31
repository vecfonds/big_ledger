import { UnprocessableEntityException } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { OrderType } from 'src/constants';

// export class GetDonBanHangDto extends PageOptionsDto {
export class GetDonBanHangDto {
  @ApiPropertyOptional({
    isArray: true,
    example: ['saleDate:DESC'],
  })
  @Transform((value) => {
    console.log('transform 1: ', value.value);
    if (Array.isArray(value.value)) {
      return value.value;
    }
    console.log('transform 1.1: ', [value.value]);
    return [value.value];
  })
  @Transform((value) => {
    console.log('transform 2: ', value.value);
    return value.value.map((item: any) => {
      const regex = /^[a-zA-Z]+:(ASC|DESC)$/;
      if (!regex.test(item)) {
        throw new UnprocessableEntityException('Sort value is invalid');
      }
      const [key, order] = item.split(':');
      return [key, order];
    });
  })
  // @IsString({ each: true, message: 'Each value in sorts must be a string' })
  @IsOptional()
  sorts?: [string, OrderType][];

  @ApiPropertyOptional({ example: 'search string', type: String })
  @IsOptional()
  @IsString()
  search?: string;
}
