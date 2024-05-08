import { type ValueOf } from '../interfaces';
export const STOCK_STATUS = {
  IN_STOCK: 'IN_STOCK',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  COMING_SOON: 'COMING_SOON',
  DISCONTINUED: 'DISCONTINUED',
} as const;

export type StockStatusType = ValueOf<typeof STOCK_STATUS>;
