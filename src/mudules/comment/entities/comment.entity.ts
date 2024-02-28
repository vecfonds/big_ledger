import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../../common/abstract.entity';

import { UserEntity } from '../../user/entities/user.entity';
import { LocationEntity } from '../../location/entities/location.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends AbstractEntity {
  @Column({ type: 'varchar' })
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @ManyToOne(() => LocationEntity, (location) => location.id)
  location: LocationEntity;
}
