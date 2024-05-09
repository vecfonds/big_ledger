import { Test, TestingModule } from '@nestjs/testing';
import { DieuKhoanController } from './dieu-khoan.controller';
import { DieuKhoanService } from './dieu-khoan.service';

describe('DieuKhoanController', () => {
  let controller: DieuKhoanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DieuKhoanController],
      providers: [DieuKhoanService],
    }).compile();

    controller = module.get<DieuKhoanController>(DieuKhoanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
