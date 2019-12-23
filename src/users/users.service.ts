import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'admin',
        password: 'admin',
      },
      {
        userId: 2,
        username: 'dude',
        password: 'dude',
      },
      {
        userId: 3,
        username: 'test',
        password: 'test',
      },
      {
        userId: 4,
        username: 'string',
        password: 'string',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
