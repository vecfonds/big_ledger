import { Test, TestingModule } from '@nestjs/testing';
import { ReportDtbhController } from './report-dtbh.controller';
import { ReportDtbhService } from './report-dtbh.service';

describe('ReportDtbhController', () => {
  let controller: ReportDtbhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportDtbhController],
      providers: [ReportDtbhService],
    }).compile();

    controller = module.get<ReportDtbhController>(ReportDtbhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
