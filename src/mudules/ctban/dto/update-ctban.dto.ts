import { PartialType } from '@nestjs/mapped-types';
import { CreateCtbanDto } from './create-ctban.dto';

export class UpdateCtbanDto extends PartialType(CreateCtbanDto) {}
