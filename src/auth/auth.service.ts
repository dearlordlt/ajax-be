import { IUser } from './../users/user.interface';
import { AuthTokenDto } from './access-token.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(user: IUser): Promise<any> {
    return this.usersService.findOne(user);
  }

  async login(user: UserDto): Promise<AuthTokenDto> {
    const validUser: IUser = await this.usersService.findOne(user as IUser);
    if (validUser) {
      const payload = {
        username: validUser.username,
        sub: validUser.password,
      };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
