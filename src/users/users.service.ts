import { UserDto } from 'src/users/user.dto';
import { IUser } from './user.interface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async findOne(user: IUser): Promise<IUser | any> {
    return this.userModel.findOne({
      username: user.username,
      password: user.password,
    });
  }

  async create(user: UserDto): Promise<IUser> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async createMany(users: UserDto[]): Promise<IUser[]> {
    return await this.userModel.insertMany(users);
  }
}
