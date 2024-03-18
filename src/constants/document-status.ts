import { type ValueOf } from '../interfaces';

export const PAYMENT_STATUS = {
  NOT_PAID: 'NOT_PAID',
  BEING_PAID: 'BEING_PAID',
  PAID: 'PAID',
} as const;
export type PaymentStatusType = ValueOf<typeof PAYMENT_STATUS>;

export const DELIVERY_STATUS = {
  NOT_DELIVERED: 'NOT_DELIVERED',
  DELIVERING: 'DELIVERING',
  DELIVERED: 'DELIVERED',
} as const;
export type DeliveryStatusType = ValueOf<typeof DELIVERY_STATUS>;

export const DOCUMENT_STATUS = {
  UNDOCUMENTED: 'UNDOCUMENTED',
  DOCUMENTING: 'DOCUMENTING',
  DOCUMENTED: 'DOCUMENTED',
};
export type DocumentStatusType = ValueOf<typeof DOCUMENT_STATUS>;
