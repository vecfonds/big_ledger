import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import {
  ANNOUNCEMENT_TYPE,
  AnnouncementType,
} from 'src/constants/annoucement-type';

@Entity({ name: 'announcement' })
export class Announcement extends AbstractEntity {
  @Column({ type: 'varchar' })
  message: string;

  @Column({ type: 'boolean', default: false })
  isRead: boolean;

  @Column({ type: 'boolean', default: false })
  isResolved: boolean;

  @Column({ type: 'enum', enum: Object.values(ANNOUNCEMENT_TYPE) })
  type: AnnouncementType;

  @Column({ type: 'int' })
  id: number;
}
