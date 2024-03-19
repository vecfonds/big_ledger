import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

import { Supplier, SupplierGroup } from './entities';
import {
  CreateSupplierDto,
  CreateSupplierGroupDto,
} from './dto/create-supplier.dto';

@Injectable()
export class SupplierRepository {
  private readonly supplierRepository: Repository<Supplier>;
  private readonly supplierGroupRepository: Repository<SupplierGroup>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.supplierRepository = this.dataSource.getRepository(Supplier);
    this.supplierGroupRepository = this.dataSource.getRepository(SupplierGroup);
  }

  createGroup(createSupplierGroup: CreateSupplierGroupDto) {
    const newSupplierGroup =
      this.supplierGroupRepository.create(createSupplierGroup);
    return this.supplierGroupRepository.save(newSupplierGroup);
  }

  create(createSupplierDto: CreateSupplierDto, supplierGroup: SupplierGroup) {
    const newSupplier = this.supplierRepository.create({
      ...createSupplierDto,
      supplierGroup: supplierGroup,
    });
    return this.supplierRepository.save(newSupplier);
  }

  findAllGroup() {
    return this.supplierGroupRepository.find();
  }

  findAll() {
    return this.supplierRepository.find();
  }

  findOneGroup(id: number) {
    return this.supplierGroupRepository.findOneBy({
      id: id,
    });
  }

  findOne(id: number) {
    return this.supplierRepository.findOneBy({
      id: id,
    });
  }

  updateGroup(id: number, supplierGroup: SupplierGroup) {
    return this.supplierGroupRepository.update(id, supplierGroup);
  }

  update(id: number, supplier: Supplier) {
    return this.supplierRepository.update(id, supplier);
  }

  removeGroup(id: number) {
    return this.supplierGroupRepository.delete(id);
  }

  remove(id: number) {
    return this.supplierRepository.delete(id);
  }
}
