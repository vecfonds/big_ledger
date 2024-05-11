import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { Customer } from 'src/mudules/customer/entities/customer.entity';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';

@Entity({ name: 'cktm' })
export class Cktm extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  minProductValue: number;

  @Column({ type: 'int' })
  discountRate: number;

  @ManyToOne(() => Customer, (customer) => customer.dieuKhoans)
  customer: Customer;

  @OneToMany(() => DonBanHang, (donBanHang) => donBanHang.cktm)
  donBanHangs: DonBanHang[];
}
