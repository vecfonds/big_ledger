import { PartialType } from '@nestjs/mapped-types';
import { CreateReportThcnDto } from './create-report-thcn.dto';

export class UpdateReportThcnDto extends PartialType(CreateReportThcnDto) {}
