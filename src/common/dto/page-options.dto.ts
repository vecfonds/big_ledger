import { DEFAULT_VALUES, ORDER, OrderType } from '../../constants';
import {
  EnumFieldOptional,
  NumberFieldOptional,
  StringFieldOptional,
} from '../../decorators';

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
