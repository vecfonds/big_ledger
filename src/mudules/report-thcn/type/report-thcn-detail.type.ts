import { Customer } from 'src/mudules/customer/entities/customer.entity';

export type ReportThcnDetailType = {
  customer: Customer;
  collectedTotal: number;
  inOfDate: number;
  outOfDate: number;
};
