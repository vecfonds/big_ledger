import { Injectable } from '@nestjs/common';

import {
  CreateSupplierDto,
  CreateSupplierGroupDto,
} from './dto/create-supplier.dto';
import {
  UpdateSupplierDto,
  UpdateSupplierGroupDto,
} from './dto/update-supplier.dto';
import { SupplierRepository } from './supplier.repository';

@Injectable()
export class SupplierService {
  constructor(private readonly supplierRepository: SupplierRepository) {}

  createGroup(createSupplierGroupDto: CreateSupplierGroupDto) {
    return this.supplierRepository.createGroup(createSupplierGroupDto);
  }

  async create(createSupplierDto: CreateSupplierDto) {
    const supplierGroup = await this.supplierRepository.findOneGroup(
      createSupplierDto.supplierGroupId,
    );
    if (!supplierGroup) {
      throw new Error('Supplier group not found');
    }
    return this.supplierRepository.create(createSupplierDto, supplierGroup);
  }

  findAllGroup() {
    return this.supplierRepository.findAllGroup();
  }

  findAll() {
    return this.supplierRepository.findAll();
  }

  findOneGroup(id: number) {
    return this.supplierRepository.findOneGroup(id);
  }

  findOne(id: number) {
    return this.supplierRepository.findOne(id);
  }

  updateGroup(id: number, updateSupplierGroupDto: UpdateSupplierGroupDto) {
    return `This action updates a #${id} supplier group`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  removeGroup(id: number) {
    return `This action removes a #${id} supplier group`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
