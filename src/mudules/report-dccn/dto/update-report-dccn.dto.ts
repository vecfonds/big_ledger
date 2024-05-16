import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDccnDto } from './create-report-dccn.dto';

export class UpdateReportDccnDto extends PartialType(CreateReportDccnDto) {}
