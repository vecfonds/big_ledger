import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import {
  CUSTOMER_STATUS,
  CustomerStatusType,
} from 'src/constants/customer-status';

export class CreateCustomerDto {
  @ApiProperty({ example: 'Customer A' })
  @IsString({ message: 'Name is not valid' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: '0123456789' })
  @IsString({ message: 'Phone is not valid' })
  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @ApiProperty({ example: 'email@example.com' })
  @IsString({ message: 'Email is not valid' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: 'Address A' })
  @IsString({ message: 'Address is not valid' })
  @IsNotEmpty({ message: 'Address is required' })
  address: string;

  @ApiProperty({ example: 'Note A' })
  @IsString({ message: 'Note is not valid' })
  @IsNotEmpty({ message: 'Note is required' })
  note: string;

  @ApiProperty({ example: 'Active' })
  @IsString({ message: 'Status is not valid' })
  @IsNotEmpty({ message: 'Status is required' })
  @IsIn(Object.values(CUSTOMER_STATUS), { message: 'Status is not valid' })
  status: CustomerStatusType;
}
