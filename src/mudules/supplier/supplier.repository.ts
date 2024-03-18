import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Supplier } from './entities';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class SupplierRepository {
  private readonly supplierRepository: Repository<Supplier>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.supplierRepository = this.dataSource.getRepository(Supplier);
  }

  create(supplier: Supplier) {
    const newSupplier = this.supplierRepository.create(supplier);
    return this.supplierRepository.save(newSupplier);
  }

  findAll() {
    return this.supplierRepository.find();
  }

  findOne(id: number) {
    return this.supplierRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, supplier: Supplier) {
    return this.supplierRepository.update(id, supplier);
  }

  remove(id: number) {
    return this.supplierRepository.delete(id);
  }
}
