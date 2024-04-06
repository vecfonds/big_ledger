import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PAYMENT_METHOD, PaymentMethodType } from '../../../constants';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';
import { Product } from 'src/mudules/product/entities/product.entity';
import { WarehouseKeeper } from 'src/mudules/employee/entities/employee.entity';
import { ChungTuCuaPhieuThu } from 'src/mudules/phieu-thu/entities/phieu-thu.entity';
import { Customer } from 'src/mudules/customer/entities/customer.entity';

@Entity({ name: 'ctban' })
export class Ctban extends AbstractEntity {
  @Column({ type: 'date' })
  deliveryDate: Date;

  @ManyToOne(
    () => WarehouseKeeper,
    (warehouseKeeper) => warehouseKeeper.ctban,
    { nullable: false },
  )
  warehouseKeeper: WarehouseKeeper;

  @Column({ type: 'enum', enum: PAYMENT_METHOD })
  paymentMethod: PaymentMethodType;

  @Column({ type: 'varchar', nullable: true })
  content?: string;

  @Column({ type: 'varchar' })
  receiver: string;

  @Column({ type: 'date' })
  paymentTerm: Date;

  @ManyToOne(() => DonBanHang, (donBanHang) => donBanHang.ctban, {
    nullable: false,
  })
  donBanHang: DonBanHang;

  @OneToMany(() => ProductOfCtban, (productOfCtban) => productOfCtban.ctban)
  productOfCtban: ProductOfCtban[];

  @OneToMany(() => ChungTuCuaPhieuThu, (chungTu) => chungTu.ctban)
  phieuThu: ChungTuCuaPhieuThu[];
}

@Entity({ name: 'product_of_ctban' })
export class ProductOfCtban extends AbstractEntity {
  @Column({ type: 'int' })
  count: number;

  @Column({ type: 'int' })
  price: number;

  @ManyToOne(() => Ctban, (ctban) => ctban.productOfCtban, { nullable: false })
  ctban: Ctban;

  @ManyToOne(() => Product, (product) => product.productOfCtban, {
    nullable: false,
  })
  product: Product;
}
