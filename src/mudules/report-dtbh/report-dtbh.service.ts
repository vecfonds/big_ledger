import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDtbhDto } from './dto/create-report-dtbh.dto';
import { UpdateReportDtbhDto } from './dto/update-report-dtbh.dto';
import { ReportDtbhRepository } from './report-dtbn.repository';
import { CtbanService } from '../ctban/ctban.service';
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class ReportDtbhService {
  constructor(
    private readonly reportDtbhRepository: ReportDtbhRepository,
    private readonly ctbanService: CtbanService,
    private readonly employeeService: EmployeeService,
  ) {}

  async create(createReportDtbhDto: CreateReportDtbhDto) {
    const startDate = new Date(createReportDtbhDto.startDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(createReportDtbhDto.endDate);
    endDate.setHours(23, 59, 59, 999);
    const salespersons = await this.employeeService.findSalespersonByIds(
      createReportDtbhDto.salespersonIds,
    );
    const ctbans = await this.ctbanService.findBySalespersons(
      startDate,
      endDate,
      salespersons,
    );
    return this.reportDtbhRepository.create(createReportDtbhDto, ctbans);
  }

  async createRaw(createReportDtbhDto: CreateReportDtbhDto) {
    const startDate = new Date(createReportDtbhDto.startDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(createReportDtbhDto.endDate);
    endDate.setHours(23, 59, 59, 999);
    const salespersons = await this.employeeService.findSalespersonByIds(
      createReportDtbhDto.salespersonIds,
    );
    const ctbans = await this.ctbanService.findBySalespersons(
      startDate,
      endDate,
      salespersons,
    );
    return ctbans;
  }

  findAll() {
    return this.reportDtbhRepository.findAll();
  }

  async findOne(id: number) {
    const reportDtbh = await this.reportDtbhRepository.findOne(id);
    if (!reportDtbh) {
      throw new NotFoundException('ReportDtbh not found');
    }
    return reportDtbh;
  }

  update(id: number, updateReportDtbhDto: UpdateReportDtbhDto) {
    return `This action updates a #${id} reportDtbh`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportDtbh`;
  }
}
