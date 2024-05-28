import { UserRoleType } from '../../../../constants/index';

export type TokenExtractPayloadType = {
  id: number;
  email: string;
  roles: UserRoleType[];
  iat: number;
  exp: number;
};
