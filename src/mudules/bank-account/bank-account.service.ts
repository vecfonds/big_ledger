import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountRepository } from './bank-account.repository';

@Injectable()
export class BankAccountService {
  constructor(private readonly bankAccountRepository: BankAccountRepository) {}

  create(createBankAccountDto: CreateBankAccountDto) {
    return this.bankAccountRepository.create(createBankAccountDto);
  }

  findAll() {
    return this.bankAccountRepository.findAll();
  }

  async findOne(id: number) {
    const bankAccount = await this.bankAccountRepository.findOne(id);
    if (!bankAccount) {
      throw new NotFoundException('Bank account not found');
    }
    return bankAccount;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a #${id} bankAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
