import { Test, TestingModule } from '@nestjs/testing';
import { HdbanService } from './hdban.service';

describe('HdbanService', () => {
  let service: HdbanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HdbanService],
    }).compile();

    service = module.get<HdbanService>(HdbanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
