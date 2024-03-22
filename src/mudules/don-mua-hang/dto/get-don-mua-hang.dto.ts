import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, ValidateBy } from 'class-validator';

import { PageOptionsDto } from 'src/common/dto/page-options.dto';
import { ORDER } from 'src/constants';

function isSortOption(value: string): boolean {
  const sortValueParts = value.split(':');
  if (sortValueParts.length !== 2) {
    return false;
  }
  for (const order of Object.values(ORDER)) {
    if (sortValueParts[1] === order) {
      return true;
    }
  }
  return false;
}

export class GetDonMuaHangDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @ValidateBy(
    {
      name: 'isSortOption',
      validator: {
        validate: (value, args): boolean => isSortOption(value),
        defaultMessage: () => '',
      },
      async: false,
    },
    {
      each: true,
      message: 'Value of sort options is not valid',
    },
  )
  // @IsArray()
  @IsOptional()
  sorts?: string[] | string;
}
