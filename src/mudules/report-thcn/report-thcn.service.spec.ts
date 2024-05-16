import { Test, TestingModule } from '@nestjs/testing';
import { ReportThcnService } from './report-thcn.service';

describe('ReportThcnService', () => {
  let service: ReportThcnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportThcnService],
    }).compile();

    service = module.get<ReportThcnService>(ReportThcnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
