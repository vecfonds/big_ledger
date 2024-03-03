import { Test, TestingModule } from '@nestjs/testing';
import { PhieuNhapService } from './phieu-nhap.service';

describe('PhieuNhapService', () => {
  let service: PhieuNhapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieuNhapService],
    }).compile();

    service = module.get<PhieuNhapService>(PhieuNhapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
