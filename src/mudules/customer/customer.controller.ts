import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import {
  CreateCustomerDto,
  CreateCustomerGroupDto,
} from './dto/create-customer.dto';
import {
  UpdateCustomerDto,
  UpdateCustomerGroupDto,
} from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doi tuong')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Get('phone/:phone')
  findOneByPhone(@Param('phone') phone: string) {
    return this.customerService.findOneByPhone(phone);
  }

  @Get('email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.customerService.findOneByEmail(email);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customerService.remove(+id);
  // }
}

@ApiTags('Doi tuong')
@Controller('customer-group')
export class CustomerGroupController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerGroupDto: CreateCustomerGroupDto) {
    return this.customerService.createGroup(createCustomerGroupDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAllGroup();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOneGroup(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerGroupDto: UpdateCustomerGroupDto,
  ) {
    return this.customerService.updateGroup(+id, updateCustomerGroupDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.customerService.removeGroup(+id);
  // }
}
