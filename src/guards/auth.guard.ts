import type { IAuthGuard, Type } from '@nestjs/passport';
import { AuthGuard as NestAuthGuard } from '@nestjs/passport';

/**
 * This guard handles 2 tasks:
 * - Checking token by calling JwtStrategy, which also extract payload and assign it to request.user
 *
 * - Optional: decide whether this route is public
 *   @param [public] (Optional) Set true if route is public
 */
export function AuthGuard(
  options?: Partial<{ public: boolean }>,
): Type<IAuthGuard> {
  const strategies = ['jwt'];

  return NestAuthGuard(strategies);
}
