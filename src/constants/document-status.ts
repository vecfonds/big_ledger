import { type ValueOf } from '../interfaces';

export const PAYMENT_STATUS = {
  CHUA_THANH_TOAN: 'CHUA_THANH_TOAN',
  DANG_THANH_TOAN: 'DANG_THANH_TOAN',
  DA_THANH_TOAN: 'DA_THANH_TOAN',
} as const;
export type PaymentStatusType = ValueOf<typeof PAYMENT_STATUS>;

export const DELIVERY_STATUS = {
  CHUA_GIAO_HANG: 'CHUA_GIAO_HANG',
  DANG_GIAO_HANG: 'DANG_GIAO_HANG',
  DA_GIAO_HANG: 'DA_GIAO_HANG',
} as const;
export type DeliveryStatusType = ValueOf<typeof DELIVERY_STATUS>;

export const DOCUMENT_STATUS = {
  CHUA_CHUNG_TU: 'CHUA_CHUNG_TU',
  DANG_CHUNG_TU: 'DANG_CHUNG_TU',
  DA_CHUNG_TU: 'DA_CHUNG_TU',
};
export type DocumentStatusType = ValueOf<typeof DOCUMENT_STATUS>;
