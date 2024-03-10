import { AbstractEntity } from '../../../common/abstract.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { SupplierGroup } from './supplier-group.entity';
import { DonMuaHang } from 'src/mudules/don-mua-hang/entities/don-mua-hang.entity';
import { PhieuChiTienMat } from 'src/mudules/phieu-chi/entities/phieu-chi.entity';

@Entity({ name: 'suppliers' })
export class Supplier extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar' })
  nguoiDaiDien: string;

  @Column({ type: 'varchar' })
  sdt: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address: string;

  @Column({ type: 'varchar' })
  accountNumber: string;

  @Column({ type: 'varchar' })
  accountName: string;

  @Column({ type: 'varchar' })
  bankName: string;

  @Column({ type: 'varchar', nullable: true })
  branch: string;

  @ManyToMany(() => Product, (product) => product.suppliers)
  products: Product[];

  @ManyToOne(() => SupplierGroup, (supplierGroup) => supplierGroup.suppliers, {
    nullable: false,
  })
  supplierGroup: SupplierGroup;

  @OneToMany(() => DonMuaHang, (donMuaHang) => donMuaHang.supplier)
  donMuaHangs: DonMuaHang[];

  @OneToMany(() => PhieuChiTienMat, (phieuChi) => phieuChi.supplier)
  phieuChi: PhieuChiTienMat[];
}
