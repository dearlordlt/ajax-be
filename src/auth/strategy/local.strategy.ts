import { IUser } from './../../users/user.interface';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(user: IUser): Promise<any> {
    const validUser = await this.authService.validateUser(user);
    if (!validUser) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
