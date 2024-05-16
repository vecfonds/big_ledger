import { Test, TestingModule } from '@nestjs/testing';
import { ReportDccnService } from './report-dccn.service';

describe('ReportDccnService', () => {
  let service: ReportDccnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportDccnService],
    }).compile();

    service = module.get<ReportDccnService>(ReportDccnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
