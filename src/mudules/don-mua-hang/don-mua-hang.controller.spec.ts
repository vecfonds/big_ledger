import { Test, TestingModule } from '@nestjs/testing';
import { DonMuaHangController } from './don-mua-hang.controller';
import { DonMuaHangService } from './don-mua-hang.service';

describe('DonMuaHangController', () => {
  let controller: DonMuaHangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonMuaHangController],
      providers: [DonMuaHangService],
    }).compile();

    controller = module.get<DonMuaHangController>(DonMuaHangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
