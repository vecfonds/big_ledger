import { Test, TestingModule } from '@nestjs/testing';
import { PhieuThuService } from './phieu-thu.service';

describe('PhieuThuService', () => {
  let service: PhieuThuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieuThuService],
    }).compile();

    service = module.get<PhieuThuService>(PhieuThuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
