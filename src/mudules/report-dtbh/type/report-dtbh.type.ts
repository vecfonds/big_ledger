import { Ctban } from 'src/mudules/ctban/entities/ctban.entity';
import { Customer } from 'src/mudules/customer/entities/customer.entity';

export type ReportDtbhDetailType = {
  totalProductValue: number;
  totalDiscountValue: number;
  ctbans: Ctban[];
};
