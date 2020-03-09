import { ApiProperty } from '@nestjs/swagger';
import { IAttributes, ITalents, IStats } from './beasts.interface';

export class BeastsDto {
    @ApiProperty()
    readonly npc: string;

    @ApiProperty()
    readonly attributes: IAttributes;

    @ApiProperty()
    readonly talents: ITalents;

    @ApiProperty()
    readonly stats: IStats;

    @ApiProperty()
    readonly abilities: string[];

    @ApiProperty()
    readonly weight: string;
}
