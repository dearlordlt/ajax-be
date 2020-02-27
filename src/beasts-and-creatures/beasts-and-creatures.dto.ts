import { ApiProperty } from '@nestjs/swagger';
import { IAttributes, ITalents, IStats } from './beasts-and-creatures.interface';

export class BeastsAndCreaturesDto {
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
