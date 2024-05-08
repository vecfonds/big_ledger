import { PartialType } from '@nestjs/mapped-types';
import {
  CreatePhieuThuTienGuiDto,
  CreatePhieuThuTienMatDto,
} from './create-phieu-thu.dto';

export class UpdatePhieuThuTienMatDto extends PartialType(
  CreatePhieuThuTienMatDto,
) {}

export class UpdatePhieuThuTienGuiDto extends PartialType(
  CreatePhieuThuTienGuiDto,
) {}
