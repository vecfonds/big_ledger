import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { SupplierGroup } from './supplier-group.entity';

@Entity({ name: 'suppliers' })
export class Supplier extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  nguoiDaiDien: string;

  @Column({ type: 'varchar' })
  sdt: string;

  @Column({ type: 'varchar' })
  email: string;

  @ManyToMany(() => Product, (product) => product.suppliers)
  products: Product[];

  @ManyToOne(() => SupplierGroup, (supplierGroup) => supplierGroup.suppliers)
  supplierGroup: SupplierGroup;
}
