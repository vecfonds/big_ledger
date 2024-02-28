import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function OtableOauth(): MethodDecorator {
  return applyDecorators(UseGuards(AuthGuard('otable')));
}
