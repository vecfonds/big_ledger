import { PartialType } from '@nestjs/mapped-types';
import { CreatePhieuXuatDto } from './create-phieu-xuat.dto';

export class UpdatePhieuXuatDto extends PartialType(CreatePhieuXuatDto) {}
