import { AuthTokenDto } from './access-token.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDto): Promise<AuthTokenDto> {
    const validUser = await this.validateUser(user.username, user.password);
    if (validUser) {
      const payload = { username: validUser.username, sub: validUser.userId };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      return null;
    }
  }
}
