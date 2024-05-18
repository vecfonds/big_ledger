import { Test, TestingModule } from '@nestjs/testing';
import { ReportDtbhService } from './report-dtbh.service';

describe('ReportDtbhService', () => {
  let service: ReportDtbhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportDtbhService],
    }).compile();

    service = module.get<ReportDtbhService>(ReportDtbhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
