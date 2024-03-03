import { PartialType } from '@nestjs/mapped-types';
import { CreateDonMuaHangDto } from './create-don-mua-hang.dto';

export class UpdateDonMuaHangDto extends PartialType(CreateDonMuaHangDto) {}
