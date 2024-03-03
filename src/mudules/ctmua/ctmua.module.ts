import { Module } from '@nestjs/common';
import { CtmuaService } from './ctmua.service';
import { CtmuaController } from './ctmua.controller';

@Module({
  controllers: [CtmuaController],
  providers: [CtmuaService],
})
export class CtmuaModule {}
