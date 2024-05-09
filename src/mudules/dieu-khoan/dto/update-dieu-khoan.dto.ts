import { PartialType } from '@nestjs/mapped-types';
import { CreateDieuKhoanDto } from './create-dieu-khoan.dto';

export class UpdateDieuKhoanDto extends PartialType(CreateDieuKhoanDto) {}
