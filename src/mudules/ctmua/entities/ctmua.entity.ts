import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';
import { Product } from 'src/mudules/product/entities/product.entity';
import { PAYMENT_METHOD, PaymentMethodType } from 'src/constants';
import { DonMuaHang } from 'src/mudules/don-mua-hang/entities/don-mua-hang.entity';
import { WarehouseKeeper } from 'src/mudules/employee/entities/employee.entity';
import { ChungTuCuaPhieuChi } from 'src/mudules/phieu-chi/entities/phieu-chi.entity';

@Entity({ name: 'ctmua' })
export class Ctmua extends AbstractEntity {
  @Column({ type: 'date' })
  ngayNhan: Date;

  @ManyToOne(
    () => WarehouseKeeper,
    (warehouseKeeper) => warehouseKeeper.ctmua,
    { nullable: false },
  )
  nguoiNhanHang: WarehouseKeeper;

  @Column({ type: 'enum', enum: PAYMENT_METHOD })
  paymentMethod: PaymentMethodType;

  @Column({ type: 'varchar', nullable: true })
  noiDung?: string;

  @Column({ type: 'varchar' })
  nguoiGiao: string;

  @ManyToMany(() => DonMuaHang, (donMuaHang) => donMuaHang.ctmuas, {
    nullable: false,
  })
  @JoinTable({ name: 'don_mua_hang_of_ctmua' })
  donMuaHangs: DonMuaHang[];

  @OneToMany(() => ProductOfCtmua, (productOfCtban) => productOfCtban.ctmua)
  productOfCtmua: ProductOfCtmua[];

  @OneToMany(() => ChungTuCuaPhieuChi, (phieuChi) => phieuChi.ctmua, {
    nullable: false,
  })
  phieuChi: ChungTuCuaPhieuChi[];
}

@Entity({ name: 'product_of_ctmua' })
export class ProductOfCtmua extends AbstractEntity {
  @Column({ type: 'int' })
  soLuong: number;

  @Column({ type: 'int' })
  donGia: number;

  @ManyToOne(() => Ctmua, (ctmua) => ctmua.productOfCtmua, { nullable: false })
  ctmua: Ctmua;

  @ManyToOne(() => Product, (product) => product.productOfCtmua, {
    nullable: false,
  })
  product: Product;
}
