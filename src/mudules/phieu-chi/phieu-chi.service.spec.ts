import { Test, TestingModule } from '@nestjs/testing';
import { PhieuChiService } from './phieu-chi.service';

describe('PhieuChiService', () => {
  let service: PhieuChiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieuChiService],
    }).compile();

    service = module.get<PhieuChiService>(PhieuChiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
