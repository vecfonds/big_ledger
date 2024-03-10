import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_groups' })
export class ProductGroup extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'int' })
  thue: number;

  @OneToMany(() => Product, (product) => product.productGroup)
  products: Product[];
}
