import { Test, TestingModule } from '@nestjs/testing';
import { PhieuXuatController } from './phieu-xuat.controller';
import { PhieuXuatService } from './phieu-xuat.service';

describe('PhieuXuatController', () => {
  let controller: PhieuXuatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieuXuatController],
      providers: [PhieuXuatService],
    }).compile();

    controller = module.get<PhieuXuatController>(PhieuXuatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
