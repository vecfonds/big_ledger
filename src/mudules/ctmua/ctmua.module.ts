import { Module } from '@nestjs/common';
import { CtmuaService } from './ctmua.service';
import { CtmuaController } from './ctmua.controller';
import { CtmuaRepository } from './ctmua.repository';

@Module({
  controllers: [CtmuaController],
  providers: [CtmuaService, CtmuaRepository],
})
export class CtmuaModule {}
