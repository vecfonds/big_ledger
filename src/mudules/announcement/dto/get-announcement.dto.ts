import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBooleanString, IsIn, IsOptional, IsString } from 'class-validator';
import { ANNOUNCEMENT_TYPE, AnnouncementType } from 'src/constants';

export class GetAnnouncementDto {
  @ApiPropertyOptional({ type: 'boolean', example: undefined })
  @IsBooleanString({ message: 'isRead must be a boolean' })
  @IsOptional()
  isRead?: boolean;

  @ApiPropertyOptional({ type: 'boolean', example: false })
  @IsBooleanString({ message: 'isRead must be a boolean' })
  @IsOptional()
  isResolved?: boolean;

  @ApiPropertyOptional({
    type: 'enum',
    enum: Object.values(ANNOUNCEMENT_TYPE),
    example: undefined,
  })
  @IsString({ message: 'type must be a string' })
  @IsIn(Object.values(ANNOUNCEMENT_TYPE), {
    message: 'type must be in ANNOUNCEMENT_TYPE',
  })
  @IsOptional()
  type?: AnnouncementType;
}
