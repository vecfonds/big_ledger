import { Test, TestingModule } from '@nestjs/testing';
import { CtbanService } from './ctban.service';

describe('CtbanService', () => {
  let service: CtbanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtbanService],
    }).compile();

    service = module.get<CtbanService>(CtbanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
