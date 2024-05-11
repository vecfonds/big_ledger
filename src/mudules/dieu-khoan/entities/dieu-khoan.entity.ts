import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';
import { Customer } from 'src/mudules/customer/entities/customer.entity';

@Entity({ name: 'dieu-khoan' })
export class DieuKhoan extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  creditPeriod: number;

  @ManyToOne(() => Customer, (customer) => customer.dieuKhoans)
  customer: Customer;

  @Column({ type: 'int' })
  discountPeriod: number;

  @Column({ type: 'int' })
  discount: number;

  @OneToMany(() => DonBanHang, (donBanHang) => donBanHang.dieuKhoan)
  donBanHangs: DonBanHang[];
}
