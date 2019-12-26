import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDto {
  @ApiProperty()
  readonly accessToken: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly role: string;

  @ApiProperty()
  readonly id: string;
}
