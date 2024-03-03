import { Test, TestingModule } from '@nestjs/testing';
import { PhieuThuController } from './phieu-thu.controller';
import { PhieuThuService } from './phieu-thu.service';

describe('PhieuThuController', () => {
  let controller: PhieuThuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieuThuController],
      providers: [PhieuThuService],
    }).compile();

    controller = module.get<PhieuThuController>(PhieuThuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
