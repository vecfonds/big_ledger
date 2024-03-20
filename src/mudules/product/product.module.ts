import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import {
  ProductController,
  ProductGroupController,
} from './product.controller';
import { ProductRepository } from './product.repository';

@Module({
  controllers: [ProductController, ProductGroupController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
