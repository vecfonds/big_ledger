import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './comment.repository';
import { LocationEntity } from '../location/entities/location.entity';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {}

  create(user: UserEntity, location: LocationEntity, content: string) {
    return this.commentRepository.create(user, location, content);
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }

  findByLocation(location: LocationEntity) {
    return this.commentRepository.findByLocation(location);
  }
}
