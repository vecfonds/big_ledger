import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';
import { Product } from 'src/mudules/product/entities/product.entity';
import { WarehouseKeeper } from 'src/mudules/employee/entities/employee.entity';
import {
  ChungTuCuaPhieuThuTienGui,
  ChungTuCuaPhieuThuTienMat,
} from 'src/mudules/phieu-thu/entities/phieu-thu.entity';
import { PAYMENT_STATUS, PaymentStatusType } from 'src/constants';
import { ReportDccnCustomerDetail } from 'src/mudules/report-dccn/entities/report-dccn.entity';

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

  @Column({ type: 'varchar', nullable: true })
  content?: string;

  @Column({ type: 'varchar' })
  receiver: string;

  @Column({ type: 'date' })
  paymentTerm: Date;

  @Column({ type: 'int' })
  totalProductValue: number;

  @Column({ type: 'int' })
  totalTaxValue: number;

  @Column({ type: 'int' })
  totalDiscountValue: number;

  @Column({ type: 'int' })
  finalValue: number;

  @Column({ type: 'int', default: 0 })
  paidValue: number;

  @Column({
    type: 'enum',
    enum: Object.values(PAYMENT_STATUS),
    default: PAYMENT_STATUS.NOT_PAID,
  })
  paymentStatus: PaymentStatusType;

  @ManyToOne(() => DonBanHang, (donBanHang) => donBanHang.ctban, {
    nullable: false,
  })
  donBanHang: DonBanHang;

  @OneToMany(() => ProductOfCtban, (productOfCtban) => productOfCtban.ctban)
  productOfCtban: ProductOfCtban[];

  @OneToMany(() => ChungTuCuaPhieuThuTienGui, (chungTu) => chungTu.ctban)
  phieuThuTienGui: ChungTuCuaPhieuThuTienGui[];

  @OneToMany(() => ChungTuCuaPhieuThuTienMat, (chungTu) => chungTu.ctban)
  phieuThuTienMat: ChungTuCuaPhieuThuTienMat[];

  @OneToMany(
    () => ReportDccnCustomerDetail,
    (reportDccnCustomerDetail) => reportDccnCustomerDetail.ctban,
  )
  reportDccnCustomerDetails: ReportDccnCustomerDetail[];
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
