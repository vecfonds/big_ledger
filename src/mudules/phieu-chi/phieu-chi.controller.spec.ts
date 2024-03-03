import { Test, TestingModule } from '@nestjs/testing';
import { PhieuChiController } from './phieu-chi.controller';
import { PhieuChiService } from './phieu-chi.service';

describe('PhieuChiController', () => {
  let controller: PhieuChiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhieuChiController],
      providers: [PhieuChiService],
    }).compile();

    controller = module.get<PhieuChiController>(PhieuChiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
