import { ApiProperty } from '@nestjs/swagger';

export class CreateMeleeweaponsDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty({ type: [Number] })
    readonly range: number[];

    @ApiProperty()
    readonly swingbaseDamage: number;

    @ApiProperty()
    readonly swingDices: string[];

    @ApiProperty()
    readonly thrustbaseDamage: number;

    @ApiProperty()
    readonly thrustDices: string[];

    @ApiProperty()
    readonly weigth: number;

    @ApiProperty()
    readonly cost: string;

    @ApiProperty()
    readonly description: string;
  }
