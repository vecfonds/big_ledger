import { DonMuaHang } from 'src/mudules/don-mua-hang/entities/don-mua-hang.entity';
import { AbstractEntity } from '../../../common/abstract.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';
import { PhieuChiTienMat } from 'src/mudules/phieu-chi/entities/phieu-chi.entity';
import { Ctban } from 'src/mudules/ctban/entities/ctban.entity';
import { Ctmua } from 'src/mudules/ctmua/entities/ctmua.entity';
import { PhieuThuTienMat } from 'src/mudules/phieu-thu/entities/phieu-thu.entity';

abstract class Emmployee extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  address: string;
}

@Entity({ name: 'accountants' })
export class Accountant extends Emmployee {
  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  avatar: string;

  @Column({ type: 'varchar', nullable: true })
  refreshToken: string;
}

@Entity({ name: 'salespersons' })
export class Salesperson extends Emmployee {
  @OneToMany(() => DonBanHang, (donBanHang) => donBanHang.salesperson)
  donBanHangs: DonBanHang[];

  @OneToMany(() => PhieuThuTienMat, (phieuThu) => phieuThu.salesperson)
  phieuThu: PhieuThuTienMat[];
}

@Entity({ name: 'purchasing_officers' })
export class PurchasingOfficer extends Emmployee {
  @OneToMany(() => DonMuaHang, (donMuaHang) => donMuaHang.purchasingOfficer)
  donMuaHangs: DonMuaHang[];

  @OneToMany(() => PhieuChiTienMat, (phieuChi) => phieuChi.purchasingOfficer)
  phieuChi: PhieuChiTienMat[];
}

@Entity({ name: 'warehouse_keepers' })
export class WarehouseKeeper extends Emmployee {
  @OneToMany(() => Ctban, (ctban) => ctban.warehouseKeeper)
  ctban: Ctban[];

  @OneToMany(() => Ctmua, (ctmua) => ctmua.nguoiNhanHang)
  ctmua: Ctmua[];
}

@Entity({ name: 'admins' })
export class Admin extends Emmployee {}
