import { PartialType } from '@nestjs/mapped-types';
import { CreateCktmDto } from './create-cktm.dto';

export class UpdateCktmDto extends PartialType(CreateCktmDto) {}
