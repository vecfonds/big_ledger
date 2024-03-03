import { Module } from '@nestjs/common';
import { CtbanService } from './ctban.service';
import { CtbanController } from './ctban.controller';

@Module({
  controllers: [CtbanController],
  providers: [CtbanService],
})
export class CtbanModule {}
