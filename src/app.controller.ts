import { AuthTokenDto } from './auth/access-token.dto';
import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { UserDto } from './users/user.dto';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() req: UserDto): Promise<AuthTokenDto> {
    return this.authService.login(req);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/test')
  async test() {
    return 'Hello World';
  }
}
