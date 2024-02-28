import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { CommentEntity } from './entities/comment.entity';
import { LocationEntity } from '../location/entities/location.entity';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class CommentRepository {
  private readonly commentRepository: Repository<CommentEntity>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.commentRepository = this.dataSource.getRepository(CommentEntity);
  }

  findByLocation(location: LocationEntity) {
    return this.commentRepository.findOne({
      where: {
        location: location,
      },
      relations: {
        user: true,
      },
    });
  }

  create(user: UserEntity, location: LocationEntity, content: string) {
    const commentEntity = this.commentRepository.create({
      user: user,
      location: location,
      content: content,
    });
    return this.commentRepository.save(commentEntity);
  }
}
