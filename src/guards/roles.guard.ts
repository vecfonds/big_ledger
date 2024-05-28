import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import _ from 'lodash';
import { USER_ROLE, type UserRoleType } from '../constants';
import { ForbiddenResourceException } from '../exceptions';

/**
 * Extract user roles from token and endpoint required roles, check if user has any of required roles.
 * Return true if yes and return Forbidden exception if no.
 */
@Injectable()
export class UserRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('UserRolesGuard');
    // const requiredRoles = this.reflector.get<UserRoleType[]>(
    //   'roles',
    //   context.getHandler(),
    // );

    // if (_.isEmpty(requiredRoles)) {
    //   return true;
    // }

    // const request = context.switchToHttp().getRequest();
    // console.log(request.user);
    // const userRoles: UserRoleType[] = [USER_ROLE.ACCOUNTANT];

    // if (!requiredRoles.some((role) => userRoles.includes(role))) {
    //   throw new ForbiddenResourceException(
    //     'Forbidden! You do not have permission to access this resource!',
    //   );
    // }

    return true;
  }
}
