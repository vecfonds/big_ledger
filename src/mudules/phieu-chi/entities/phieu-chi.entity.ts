import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { PurchasingOfficer } from 'src/mudules/employee/entities/employee.entity';
import { Supplier } from 'src/mudules/supplier/entities';
import { BankAccount } from 'src/mudules/bank-account/entities/bank-account.entity';
import { Ctmua } from 'src/mudules/ctmua/entities/ctmua.entity';

@Entity({ name: 'phieu_chi_tien_mat' })
export class PhieuChiTienMat extends AbstractEntity {
  @Column({ type: 'date' })
  ngayChi: Date;

  @Column({ type: 'varchar', nullable: true })
  noiDung?: string;

  @Column({ type: 'varchar', nullable: true })
  nguoiNhan?: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.phieuChi, {
    nullable: false,
  })
  supplier?: Supplier;

  @ManyToOne(
    () => PurchasingOfficer,
    (purchasingOfficer) => purchasingOfficer.phieuChi,
    { nullable: false },
  )
  purchasingOfficer: PurchasingOfficer;

  @OneToMany(() => ChungTuCuaPhieuChi, (chungTu) => chungTu.phieuChi)
  chungTu: ChungTuCuaPhieuChi[];
}

@Entity({ name: 'phieu_chi_tien_gui' })
export class PhieuChiTienGui extends PhieuChiTienMat {
  @ManyToOne(() => BankAccount, (bankAccount) => bankAccount.phieuChi, {
    nullable: false,
  })
  bankAccount: BankAccount;
}

@Entity({ name: 'chung_tu_cua_phieu_chi' })
@Unique(['phieuChi', 'ctmua'])
export class ChungTuCuaPhieuChi extends AbstractEntity {
  @Column({ type: 'int' })
  soTien: number;

  @Column({ type: 'varchar', nullable: true })
  noiDung?: string;

  @ManyToOne(() => PhieuChiTienMat, (phieuChi) => phieuChi.chungTu, {
    nullable: false,
  })
  phieuChi: PhieuChiTienMat;

  @ManyToOne(() => Ctmua, (ctmua) => ctmua.phieuChi, { nullable: false })
  ctmua: Ctmua;
}
