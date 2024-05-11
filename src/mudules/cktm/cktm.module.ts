import { Module } from '@nestjs/common';
import { CktmService } from './cktm.service';
import { CktmController } from './cktm.controller';
import { CktmRepository } from './cktm.repository';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [CktmController],
  providers: [CktmService, CktmRepository],
  imports: [CustomerModule],
  exports: [CktmService],
})
export class CktmModule {}
