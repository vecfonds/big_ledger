import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import {
  SupplierController,
  SupplierGroupController,
} from './supplier.controller';
import { SupplierRepository } from './supplier.repository';

@Module({
  controllers: [SupplierController, SupplierGroupController],
  providers: [SupplierService, SupplierRepository],
  exports: [SupplierService],
})
export class SupplierModule {}
