import { type ValueOf } from '../interfaces';
export const UNIT = {
  CAI: 'CAI',
  CAY: 'CAY',
  CHAI: 'CHAI',
  CHUC: 'CHUC',
  CUON: 'CUON',
  GOI: 'GOI',
  HOP: 'HOP',
  HU: 'HU',
  KG: 'KG',
  LOC: 'LOC',
  LON: 'LON',
  THUNG: 'THUNG',
  TON: 'TON',
  VIEN: 'VIEN',
} as const;

export type UnitType = ValueOf<typeof UNIT>;
