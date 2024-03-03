import { Test, TestingModule } from '@nestjs/testing';
import { PhieuXuatService } from './phieu-xuat.service';

describe('PhieuXuatService', () => {
  let service: PhieuXuatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhieuXuatService],
    }).compile();

    service = module.get<PhieuXuatService>(PhieuXuatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
