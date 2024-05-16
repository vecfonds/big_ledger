import { Test, TestingModule } from '@nestjs/testing';
import { ReportDccnController } from './report-dccn.controller';
import { ReportDccnService } from './report-dccn.service';

describe('ReportDccnController', () => {
  let controller: ReportDccnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportDccnController],
      providers: [ReportDccnService],
    }).compile();

    controller = module.get<ReportDccnController>(ReportDccnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
