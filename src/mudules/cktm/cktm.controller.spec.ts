import { Test, TestingModule } from '@nestjs/testing';
import { CktmController } from './cktm.controller';
import { CktmService } from './cktm.service';

describe('CktmController', () => {
  let controller: CktmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CktmController],
      providers: [CktmService],
    }).compile();

    controller = module.get<CktmController>(CktmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
