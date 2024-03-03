import { Test, TestingModule } from '@nestjs/testing';
import { CtbanController } from './ctban.controller';
import { CtbanService } from './ctban.service';

describe('CtbanController', () => {
  let controller: CtbanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtbanController],
      providers: [CtbanService],
    }).compile();

    controller = module.get<CtbanController>(CtbanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
