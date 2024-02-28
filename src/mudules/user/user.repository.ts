import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  private readonly userRepository: Repository<UserEntity>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }

  findOneById(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email: email });
  }

  create(user: CreateUserDto) {
    return this.userRepository.save(user);
  }
}
