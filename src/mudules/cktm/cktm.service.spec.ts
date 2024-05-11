import { Test, TestingModule } from '@nestjs/testing';
import { CktmService } from './cktm.service';

describe('CktmService', () => {
  let service: CktmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CktmService],
    }).compile();

    service = module.get<CktmService>(CktmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
