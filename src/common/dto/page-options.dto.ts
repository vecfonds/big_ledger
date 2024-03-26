import { IsOptional, ValidateBy } from 'class-validator';
import { DEFAULT_VALUES, ORDER, OrderType } from '../../constants';
import {
  EnumFieldOptional,
  NumberFieldOptional,
  StringFieldOptional,
} from '../../decorators';
import { ApiPropertyOptional } from '@nestjs/swagger';

function isSortOption(value: string): boolean {
  const sortValueParts = value.split(':');
  if (sortValueParts.length !== 2) {
    return false;
  }
  for (const order of Object.values(ORDER)) {
    if (sortValueParts[1] === order) {
      return true;
    }
  }
  return false;
}

export class PageOptionsDto {
  // @EnumFieldOptional(() => ORDER, {
  //   default: ORDER.ASC,
  // })
  // readonly order: OrderType = ORDER.ASC;

  @NumberFieldOptional({
    minimum: 1,
    default: DEFAULT_VALUES.CURRENT_PAGE,
    int: true,
  })
  readonly currentPage: number = DEFAULT_VALUES.CURRENT_PAGE;

  @NumberFieldOptional({
    minimum: 1,
    maximum: 50,
    default: DEFAULT_VALUES.PAGE_SIZE,
    int: true,
  })
  readonly pageSize: number = DEFAULT_VALUES.PAGE_SIZE;

  get skip(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  @StringFieldOptional()
  readonly q?: string;
}

export class SortOptionsDto {
  @ApiPropertyOptional()
  @ValidateBy(
    {
      name: 'isSortOption',
      validator: {
        validate: (value, args): boolean => isSortOption(value),
        defaultMessage: () => '',
      },
      async: false,
    },
    {
      each: true,
      message: 'Value of sort options is not valid',
    },
  )
  // @IsArray()
  @IsOptional()
  sorts?: string[] | string;
}

export class SortAndPageOptionsDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @ValidateBy(
    {
      name: 'isSortOption',
      validator: {
        validate: (value, args): boolean => isSortOption(value),
        defaultMessage: () => '',
      },
      async: false,
    },
    {
      each: true,
      message: 'Value of sort options is not valid',
    },
  )
  @IsOptional()
  sorts?: string[] | string;
}
