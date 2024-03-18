import { type ValueOf } from '../interfaces';
export const PAYMENT_METHOD = {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER',
} as const;

export type PaymentMethodType = ValueOf<typeof PAYMENT_METHOD>;
