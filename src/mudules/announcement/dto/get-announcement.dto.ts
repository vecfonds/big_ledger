import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBooleanString, IsOptional } from 'class-validator';

export class GetAnnouncementDto {
  @ApiPropertyOptional({ type: 'boolean', example: false })
  @IsBooleanString({ message: 'isRead must be a boolean' })
  @IsOptional()
  isRead?: boolean;

  @ApiPropertyOptional({ type: 'boolean', example: false })
  @IsBooleanString({ message: 'isRead must be a boolean' })
  @IsOptional()
  isResolved?: boolean;
}
