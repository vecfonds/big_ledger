import { Test, TestingModule } from '@nestjs/testing';
import { PhieuNhapController } from './phieu-nhap.controller';
import { PhieuNhapService } from './phieu-nhap.service';

describe('PhieuNhapController', () => {
  let controller: PhieuNhapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieuNhapController],
      providers: [PhieuNhapService],
    }).compile();

    controller = module.get<PhieuNhapController>(PhieuNhapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
