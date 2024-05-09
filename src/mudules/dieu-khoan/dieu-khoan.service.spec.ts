import { Test, TestingModule } from '@nestjs/testing';
import { DieuKhoanService } from './dieu-khoan.service';

describe('DieuKhoanService', () => {
  let service: DieuKhoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DieuKhoanService],
    }).compile();

    service = module.get<DieuKhoanService>(DieuKhoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
