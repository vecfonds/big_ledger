import { PartialType } from '@nestjs/mapped-types';
import { CreateDonBanHangDto } from './create-don-ban-hang.dto';

export class UpdateDonBanHangDto extends PartialType(CreateDonBanHangDto) {}
