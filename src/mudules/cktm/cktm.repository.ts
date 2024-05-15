import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Cktm } from './entities/cktm.entity';
import { Customer } from '../customer/entities/customer.entity';
import { UpdateCktmDto } from './dto/update-cktm.dto';

@Injectable()
export class CktmRepository {
  private readonly cktmRepository: Repository<Cktm>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.cktmRepository = this.dataSource.getRepository(Cktm);
  }

  create(createCktmDto: any, customer: Customer) {
    const newCktm = this.cktmRepository.create({
      ...createCktmDto,
      customer: customer,
    });
    return this.dataSource.manager.save(newCktm);
  }

  findAll() {
    return this.cktmRepository.find();
  }

  findByCustomer(id: number) {
    return this.cktmRepository.find({
      where: {
        customer: {
          id: id,
        },
      },
    });
  }

  findOne(id: number) {
    return this.cktmRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCktmDto: UpdateCktmDto) {
    return this.cktmRepository.update(id, updateCktmDto);
  }

  remove(id: number) {
    return this.cktmRepository.delete(id);
  }
}
