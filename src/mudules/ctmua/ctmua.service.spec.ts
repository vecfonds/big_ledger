import { Test, TestingModule } from '@nestjs/testing';
import { CtmuaService } from './ctmua.service';

describe('CtmuaService', () => {
  let service: CtmuaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtmuaService],
    }).compile();

    service = module.get<CtmuaService>(CtmuaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
