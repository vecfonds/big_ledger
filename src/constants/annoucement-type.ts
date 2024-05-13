import { type ValueOf } from '../interfaces';
export const ANNOUNCEMENT_TYPE = {
  THU: 'THU',
  CHI: 'CHI',
  BAN_HANG: 'BAN_HANG',
  MUA_HANG: 'MUA_HANG',
} as const;

export type AnnouncementType = ValueOf<typeof ANNOUNCEMENT_TYPE>;
