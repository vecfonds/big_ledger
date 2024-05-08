import { Module } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { BankAccountRepository } from './bank-account.repository';

@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService, BankAccountRepository],
  exports: [BankAccountService],
})
export class BankAccountModule {}
