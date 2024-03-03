import { type ValueOf } from '../interfaces';
export const USER_ROLE = {
  ADMIN: 'ADMIN',
  KE_TOAN: 'KE_TOAN',
  MUA_HANG: 'MUA_HANG',
  BAN_HANG: 'BAN_HANG',
  KHO: 'KHO',
} as const;

export type UserRoleType = ValueOf<typeof USER_ROLE>;
