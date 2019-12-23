import { AuthTokenDto } from './auth/access-token.dto';
import { Controller, Post, UseGuards, Body, Param, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './users/user.dto';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth, ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Login')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: UserDto })
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() req: UserDto): Promise<AuthTokenDto> {
    return this.authService.login(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('auth/test/:test')
  async test(@Param('test') test: string) {
    return 'Hello World ' + test;
  }

  @Get('auth/test/')
  async testGet() {
    return 'Hello World';
  }
}
