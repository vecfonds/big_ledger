import { ConflictException } from '@nestjs/common';

import { ERROR_CONFLICT_RESOURCE } from '../filters/constraint-errors';

export class ConflictResourceException extends ConflictException {
  constructor(error?: string) {
    super(ERROR_CONFLICT_RESOURCE, error);
  }
}
