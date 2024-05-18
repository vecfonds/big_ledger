import { PartialType } from '@nestjs/mapped-types';
import { CreateReportDtbhDto } from './create-report-dtbh.dto';

export class UpdateReportDtbhDto extends PartialType(CreateReportDtbhDto) {}
