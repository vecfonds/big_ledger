import { PartialType } from '@nestjs/mapped-types';
import { CreateCtmuaDto } from './create-ctmua.dto';

export class UpdateCtmuaDto extends PartialType(CreateCtmuaDto) {}
