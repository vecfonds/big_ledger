import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { ApiTags, ApiOkResponse, ApiBody } from '@nestjs/swagger';
import { AuthResponseDto } from './dtos/auth-response.dto';
import { USER_ROLE } from 'src/constants';
import { Auth } from 'src/decorators/http.decorators';
import { AuthUser } from 'src/decorators';
import { Accountant } from '../employee/entities/employee.entity';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Auth([USER_ROLE.ACCOUNTANT])
  @Get('me')
  @HttpCode(HttpStatus.OK)
  getMe(@AuthUser() user: Accountant) {
    return user;
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Successfully',
    type: AuthResponseDto,
  })
  @ApiBody({ type: LoginDto })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
