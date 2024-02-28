import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { LocationEntity } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationRepository {
  private readonly locationRepository: Repository<LocationEntity>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.locationRepository = this.dataSource.getRepository(LocationEntity);
  }

  findOneById(id: number) {
    return this.locationRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        comments: {
          user: true,
        },
      },
    });
  }

  findAll() {
    return this.locationRepository.find();
  }

  search(name: string) {
    return this.locationRepository.find({
      where: {
        name: Like(`%${name}%`),
      },
      relations: {
        comments: {
          user: true,
        },
      },
    });
  }

  create = async (location: CreateLocationDto) => {
    return this.locationRepository.save(location);
  };

  update = async (id: number, location: UpdateLocationDto) => {
    return this.locationRepository.update({ id: id }, location);
  };
}
