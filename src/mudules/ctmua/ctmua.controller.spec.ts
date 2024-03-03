import { Test, TestingModule } from '@nestjs/testing';
import { CtmuaController } from './ctmua.controller';
import { CtmuaService } from './ctmua.service';

describe('CtmuaController', () => {
  let controller: CtmuaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtmuaController],
      providers: [CtmuaService],
    }).compile();

    controller = module.get<CtmuaController>(CtmuaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
