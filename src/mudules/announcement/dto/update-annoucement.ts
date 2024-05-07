import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateAnnouncementDto {
  @ApiProperty({ type: 'boolean', example: false })
  @IsBoolean({ message: 'isRead must be a boolean' })
  @IsOptional()
  isRead?: boolean;

  @ApiProperty({ type: 'boolean', example: false })
  @IsBoolean({ message: 'isRead must be a boolean' })
  @IsOptional()
  isResolved?: boolean;
}
