import { Module } from '@nestjs/common';
import { HdbanService } from './hdban.service';
import { HdbanController } from './hdban.controller';

@Module({
  controllers: [HdbanController],
  providers: [HdbanService],
})
export class HdbanModule {}
