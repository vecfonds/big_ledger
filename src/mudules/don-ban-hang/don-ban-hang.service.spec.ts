import { Test, TestingModule } from '@nestjs/testing';
import { DonBanHangService } from './don-ban-hang.service';

describe('DonBanHangService', () => {
  let service: DonBanHangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonBanHangService],
    }).compile();

    service = module.get<DonBanHangService>(DonBanHangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
