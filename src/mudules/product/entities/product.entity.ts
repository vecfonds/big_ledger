import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { DonViType, DON_VI } from '../../../constants';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { ProductGroup } from './product-group.entity';

@Entity({ name: 'products' })
export class Product extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  priceReceived: number;

  @Column({ type: 'int' })
  priceDelivery: number;

  @Column({ type: 'int' })
  category: number;

  @Column({ type: 'enum', enum: DON_VI })
  donVi: DonViType;

  @ManyToMany(() => Supplier, (supplier) => supplier.products)
  suppliers: Supplier[];

  @ManyToOne(() => ProductGroup, (productGroup) => productGroup.products)
  productGroup: ProductGroup;
}
