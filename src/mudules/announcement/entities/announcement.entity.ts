import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { AbstractEntity } from 'src/common/abstract.entity';
import { ANNOUNCEMENT_TYPE, AnnouncementType } from 'src/constants';

@Entity({ name: 'announcement' })
@Unique('entity_type', ['entityId', 'type'])
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
  entityId: number;
}
