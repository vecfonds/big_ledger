import { type ValueOf } from '../interfaces';
export const CUSTOMER_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BLOCK: 'BLOCK',
} as const;

export type CustomerStatusType = ValueOf<typeof CUSTOMER_STATUS>;
