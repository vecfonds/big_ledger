import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Supplier } from './supplier.entity';

@Entity({ name: 'supplier_groups' })
export class SupplierGroup extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => Supplier, (supplier) => supplier.supplierGroup)
  suppliers: Supplier[];
}
