import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ type: String })
  accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }
}
