import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';

@Injectable()
export class BankAccountRepository {
  private readonly bankAccountRepository: Repository<BankAccount>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.bankAccountRepository = this.dataSource.getRepository(BankAccount);
  }
  create(createBankAccountDto: CreateBankAccountDto) {
    const newBankAccount = this.bankAccountRepository.create({
      ...createBankAccountDto,
    });
    return this.bankAccountRepository.save(newBankAccount);
  }

  findAll() {
    return this.bankAccountRepository.find();
  }

  findOne(id: number) {
    return this.bankAccountRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
