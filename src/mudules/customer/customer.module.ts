import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import {
  CustomerController,
  CustomerGroupController,
} from './customer.controller';
import { CustomerRepository } from './customer.repository';

@Module({
  controllers: [CustomerController, CustomerGroupController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}
