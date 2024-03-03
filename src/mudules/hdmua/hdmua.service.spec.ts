import { Test, TestingModule } from '@nestjs/testing';
import { HdmuaService } from './hdmua.service';

describe('HdmuaService', () => {
  let service: HdmuaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HdmuaService],
    }).compile();

    service = module.get<HdmuaService>(HdmuaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
