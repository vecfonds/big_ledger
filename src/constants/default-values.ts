import { type ValueOf } from '../interfaces';
export const DEFAULT_VALUES = {
  PAGE_SIZE: 20,
  CURRENT_PAGE: 1,
  SORT: 'id',
  ORDER: 'DESC',
  DEFAULT_ADDRESS: 'This is an address',
  DEFAULT_PHONE: '0123456789',
  DEFAULT_EMAIL: 'email@example.com',
} as const;

export type DefaultValueType = ValueOf<typeof DEFAULT_VALUES>;
