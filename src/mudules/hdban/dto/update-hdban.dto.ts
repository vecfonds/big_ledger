import { PartialType } from '@nestjs/mapped-types';
import { CreateHdbanDto } from './create-hdban.dto';

export class UpdateHdbanDto extends PartialType(CreateHdbanDto) {}
