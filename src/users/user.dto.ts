import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  readonly email?: string;

  @ApiProperty()
  readonly role?: string;
}
