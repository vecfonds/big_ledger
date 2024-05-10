import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';

@Entity({ name: 'dieu-khoan' })
export class DieuKhoan extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  discount: number;

  @Column({ type: 'int' })
  creditPeriod: number;

  @Column({ type: 'int' })
  discountPeriod: number;

  @OneToMany(() => DonBanHang, (donBanHang) => donBanHang.dieuKhoan)
  donBanHangs: DonBanHang[];
}
