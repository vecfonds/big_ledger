import { Ctban } from 'src/mudules/ctban/entities/ctban.entity';
import { Salesperson } from 'src/mudules/employee/entities/employee.entity';

export type ReportDtbhDetailType = {
  salesperson: Salesperson;
  totalProductValue: number;
  totalDiscountValue: number;
  ctbans: Ctban[];
};
