import { ApiProperty } from '@nestjs/swagger';

import type { PageOptionsDto } from './page-options.dto';

interface IPageMetaDtoParameters {
  pageOptionsDto: PageOptionsDto;
  itemCount: number;
}

export class PageMetaDto {
  @ApiProperty()
  readonly currentPage: number;

  @ApiProperty()
  readonly pageSize: number;

  @ApiProperty()
  readonly totalRecord: number;

  @ApiProperty()
  readonly totalPage: number;

  @ApiProperty()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: IPageMetaDtoParameters) {
    this.currentPage = pageOptionsDto.currentPage;
    this.pageSize = pageOptionsDto.pageSize;
    this.totalRecord = itemCount;
    this.totalPage = Math.ceil(this.totalRecord / this.pageSize);
    this.hasPreviousPage = this.currentPage > 1;
    this.hasNextPage = this.currentPage < this.totalPage;
  }
}
