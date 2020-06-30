import { UserDto } from 'src/users/user.dto';
import { IUser } from './user.interface';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { hashUser } from 'src/_helpers/hashUser';
import md5 from 'md5-hash';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

  async findOne(user: IUser): Promise<IUser | any> {
    return this.userModel.findOne({
      username: user.username,
      password: md5(user.password),
    });
  }

  async find(user: IUser): Promise <any> {
    return this.userModel.find(user);
  }

  async create(user: UserDto): Promise<IUser> {
    const createdUser = new this.userModel(hashUser(user));
    return await createdUser.save();
  }

  async createMany(users: UserDto[]): Promise<IUser[]> {
    users.map(u => hashUser(u));
    return await this.userModel.insertMany(users);
  }
}
