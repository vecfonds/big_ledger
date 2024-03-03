import { Module } from '@nestjs/common';
import { HdmuaService } from './hdmua.service';
import { HdmuaController } from './hdmua.controller';

@Module({
  controllers: [HdmuaController],
  providers: [HdmuaService],
})
export class HdmuaModule {}
