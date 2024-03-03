import { Test, TestingModule } from '@nestjs/testing';
import { DonBanHangController } from './don-ban-hang.controller';
import { DonBanHangService } from './don-ban-hang.service';

describe('DonBanHangController', () => {
  let controller: DonBanHangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonBanHangController],
      providers: [DonBanHangService],
    }).compile();

    controller = module.get<DonBanHangController>(DonBanHangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
