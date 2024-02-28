import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty({ message: 'content is required' })
  @IsString({ message: 'content must be string' })
  @ApiProperty({ example: 'beautiful' })
  content: string;
}
