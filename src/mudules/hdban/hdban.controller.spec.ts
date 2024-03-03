import { Test, TestingModule } from '@nestjs/testing';
import { HdbanController } from './hdban.controller';
import { HdbanService } from './hdban.service';

describe('HdbanController', () => {
  let controller: HdbanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HdbanController],
      providers: [HdbanService],
    }).compile();

    controller = module.get<HdbanController>(HdbanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
