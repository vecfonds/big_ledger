import { type ValueOf } from '../interfaces';
export const DEFAULT_VALUES = {
  PAGE_SIZE: 20,
  CURRENT_PAGE: 1,
  SORT: 'id',
  ORDER: 'DESC',
  DEFAULT_ADDRESS: 'This is an address',
  DEFAULT_PHONE: '0123456789',
  DEFAULT_EMAIL: 'email@example.com',
  DEFAULT_AVATAR:
    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1712382665~exp=1712383265~hmac=1264bf5b746984c6e4a9554075f1ce6c44273d64cb8b7a45336667ef25818f40',
} as const;

export type DefaultValueType = ValueOf<typeof DEFAULT_VALUES>;
