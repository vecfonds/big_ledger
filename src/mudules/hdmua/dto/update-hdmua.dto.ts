import { PartialType } from '@nestjs/mapped-types';
import { CreateHdmuaDto } from './create-hdmua.dto';

export class UpdateHdmuaDto extends PartialType(CreateHdmuaDto) {}
