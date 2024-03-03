import { Test, TestingModule } from '@nestjs/testing';
import { HdmuaController } from './hdmua.controller';
import { HdmuaService } from './hdmua.service';

describe('HdmuaController', () => {
  let controller: HdmuaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HdmuaController],
      providers: [HdmuaService],
    }).compile();

    controller = module.get<HdmuaController>(HdmuaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
