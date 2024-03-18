import { type ValueOf } from '../interfaces';
export const USER_ROLE = {
  ADMIN: 'ADMIN',
  ACCOUNTANT: 'ACCOUNTANT',
  SALESPERSON: 'SALESPERSON',
  WAREHOUSE_KEEPER: 'WAREHOUSE_KEEP',
  PURCHARSING_OFFICER: 'PURCHARSING_OFFICER',
} as const;

export type UserRoleType = ValueOf<typeof USER_ROLE>;
