import { AbstractEntity } from 'src/common/abstract.entity';
import { Ctban } from 'src/mudules/ctban/entities/ctban.entity';
import { DonBanHang } from 'src/mudules/don-ban-hang/entities/don-ban-hang.entity';
import { Salesperson } from 'src/mudules/employee/entities/employee.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'report_dtbh' })
export class ReportDtbh extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'int' })
  productValuetotal: number;

  @Column({ type: 'int' })
  discountValueTotal: number;

  @ManyToOne(() => Salesperson, (salesperson) => salesperson.reportDtbhs)
  salesperson: Salesperson;

  @ManyToMany(() => Ctban, (ctban) => ctban.reportDtbhs)
  @JoinTable({ name: 'report_dtbh_ctban' })
  ctbans: Ctban[];
}
