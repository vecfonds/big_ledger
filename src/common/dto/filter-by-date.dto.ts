import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional } from 'class-validator';

export class FilterByDateDto {
  @ApiPropertyOptional({ example: '2021-09-01' })
  @IsOptional()
  @IsDateString(undefined, {
    message: 'Invalid date format. Please use YYYY-MM-DD',
  })
  startDate: string;

  @IsOptional()
  @IsDateString(undefined, {
    message: 'Invalid date format. Please use YYYY-MM-DD',
  })
  endDate: string;
}
