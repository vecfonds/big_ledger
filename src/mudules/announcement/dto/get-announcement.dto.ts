import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { ApiBooleanPropertyOptional } from 'src/decorators';

export class GetAnnouncementDto {
  @ApiPropertyOptional({ example: true })
  @IsBoolean({ message: 'isRead must be a boolean' })
  isRead?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsBoolean({ message: 'isResolved must be a boolean' })
  isResolved?: boolean;
}
