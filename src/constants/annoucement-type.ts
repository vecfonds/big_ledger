import { type ValueOf } from '../interfaces';
export const ANNOUNCEMENT_TYPE = {
  THU: 'THU',
  CHI: 'CHI',
} as const;

export type AnnouncementType = ValueOf<typeof ANNOUNCEMENT_TYPE>;
