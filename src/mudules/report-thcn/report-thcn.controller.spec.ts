import { Test, TestingModule } from '@nestjs/testing';
import { ReportThcnController } from './report-thcn.controller';
import { ReportThcnService } from './report-thcn.service';

describe('ReportThcnController', () => {
  let controller: ReportThcnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportThcnController],
      providers: [ReportThcnService],
    }).compile();

    controller = module.get<ReportThcnController>(ReportThcnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
