import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuThuDto } from './create-phieu-thu.dto';

export class UpdatePhieuThuDto extends PartialType(CreatePhieuThuDto) {}
