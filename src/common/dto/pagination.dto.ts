import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional()
  currentPage: number;

  @ApiPropertyOptional()
  pageSize: number;

  @ApiPropertyOptional()
  totalPage: number;

  @ApiPropertyOptional()
  totalRecord: number;

  constructor(
    currentPage: number,
    pageSize: number,
    totalPage: number,
    totalRecord: number,
  ) {
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalPage = totalPage;
    this.totalRecord = totalRecord;
  }
}
