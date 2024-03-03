import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuChiDto } from './create-phieu-chi.dto';

export class UpdatePhieuChiDto extends PartialType(CreatePhieuChiDto) {}
