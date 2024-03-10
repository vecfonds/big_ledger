import { type ValueOf } from '../interfaces';
export const PAYMENT_METHOD = {
  TIEN_MAT: 'TIEN_MAT',
  CHUYEN_KHOAN: 'CHUYEN_KHOAN',
} as const;

export type PaymentMethodType = ValueOf<typeof PAYMENT_METHOD>;
