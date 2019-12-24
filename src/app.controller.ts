import { ROLE } from './types/types';
import { UserSchema } from './models/users.schema';
import { IUser } from './users/user.interface';
import { AuthTokenDto } from './auth/access-token.dto';
import { Controller, Post, UseGuards, Body, Param, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './users/user.dto';
import { AuthService } from './auth/auth.service';
import { ApiBearerAuth, ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users/users.service';

@ApiBearerAuth()
@ApiTags('Login')
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @ApiBody({ type: UserDto })
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

  @Get('auth/generate-users/')
  async generateUsers() {
    const users = [
      { username: 'admin', password: 'admin', role: 'ADMIN' },
      { username: 'user', password: 'user', role: 'USER' },
      { username: 'string', password: 'string', role: 'ADMIN' },
    ];
    return this.usersService.createMany(users);
  }
}
