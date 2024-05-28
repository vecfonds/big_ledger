import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { PageDto } from './page.dto';
import { PaginationDto } from './pagination.dto';

export class MetaResponseDto {
  @ApiProperty()
  statusCode: number;

  @ApiPropertyOptional()
  message: string;

  @ApiPropertyOptional()
  error: string;

  @ApiPropertyOptional()
  pagination: PaginationDto;

  constructor(
    statusCode: number,
    message?: string,
    error?: string,
    pagination?: PaginationDto,
  ) {
    this.statusCode = statusCode;
    this.message = message ?? '';
    this.error = error ?? '';
    if (pagination) {
      this.pagination = new PaginationDto(
        pagination.currentPage,
        pagination.pageSize,
        pagination.totalPage,
        pagination.totalRecord,
      );
    }
  }
}

export class ResponseDto<T> {
  @ApiProperty()
  result: { data: T | null } | T;

  @ApiProperty({
    type: MetaResponseDto,
  })
  meta: MetaResponseDto;

  constructor(data: T | null, meta: MetaResponseDto) {
    this.meta = meta;

    if (!data) {
      data = null;
    }

    this.result = {
      data,
    };
  }
}
