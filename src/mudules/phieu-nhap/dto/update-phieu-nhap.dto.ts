import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuNhapDto } from './create-phieu-nhap.dto';

export class UpdatePhieuNhapDto extends PartialType(CreatePhieuNhapDto) {}
