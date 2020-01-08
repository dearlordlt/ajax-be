import { ApiProperty } from '@nestjs/swagger';

export class CreateShieldsDto {
  @ApiProperty()
   readonly name: string;

  @ApiProperty()
  readonly weight: number;

  @ApiProperty()
  readonly defence: number;

  @ApiProperty()
  readonly hp: number;

  @ApiProperty()
  readonly cost: string;
}
