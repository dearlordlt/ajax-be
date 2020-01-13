import { ApiProperty } from '@nestjs/swagger';

export class ShieldsDto {
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
