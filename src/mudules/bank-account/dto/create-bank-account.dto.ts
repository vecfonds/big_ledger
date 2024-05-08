import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBankAccountDto {
  @ApiProperty({ example: '1234567890' })
  @IsString({ message: 'Account number must be a string ' })
  @IsNotEmpty({ message: 'Account number is required' })
  accountNumber: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  @IsString({ message: 'Account name must be a string ' })
  @IsNotEmpty({ message: 'Account name is required' })
  accountName: string;

  @ApiProperty({ example: 'Vietcombank' })
  @IsString({ message: 'Bank name must be a string ' })
  @IsNotEmpty({ message: 'Bank name is required' })
  bankName: string;

  @ApiProperty({ example: 'HCM' })
  @IsString({ message: 'Branch must be a string ' })
  @IsNotEmpty({ message: 'Branch is required' })
  branch: string;

  @ApiProperty({ example: 'Note' })
  @IsString({ message: 'Note must be a string ' })
  @IsOptional()
  note?: string;
}
