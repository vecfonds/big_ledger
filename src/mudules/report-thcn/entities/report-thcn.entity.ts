import { AbstractEntity } from 'src/common/abstract.entity';
import { Customer } from 'src/mudules/customer/entities/customer.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'report_thcn' })
export class ReportThcn extends AbstractEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @OneToMany(
    () => ReportThcnDetail,
    (reportThcnDetail) => reportThcnDetail.reportThcn,
  )
  reportThcnDetails: ReportThcnDetail[];
}

@Entity({ name: 'report_thcn_details' })
export class ReportThcnDetail extends AbstractEntity {
  @ManyToOne(() => Customer, (customer) => customer.reportThcnDetails, {
    nullable: false,
  })
  customer: Customer;

  @Column({ type: 'int', default: 0 })
  colectted: number;

  @Column({ type: 'int' })
  outOfDate: number;

  @Column({ type: 'int' })
  inOfDate: number;

  @ManyToOne(() => ReportThcn, (reportThcn) => reportThcn.reportThcnDetails, {
    nullable: false,
  })
  reportThcn: ReportThcn;
}
