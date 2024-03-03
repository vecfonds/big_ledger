import { Test, TestingModule } from '@nestjs/testing';
import { DonMuaHangService } from './don-mua-hang.service';

describe('DonMuaHangService', () => {
  let service: DonMuaHangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonMuaHangService],
    }).compile();

    service = module.get<DonMuaHangService>(DonMuaHangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
