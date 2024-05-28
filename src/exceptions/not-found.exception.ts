import { NotFoundException } from '@nestjs/common';

import { ERROR_NOT_FOUND } from '../filters/constraint-errors';

export class NotFound extends NotFoundException {
  constructor(error?: string) {
    super(ERROR_NOT_FOUND, error);
  }
}
