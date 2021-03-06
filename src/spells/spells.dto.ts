import { ApiProperty } from '@nestjs/swagger';
import { SPELL_COST_TYPE } from 'src/types/types';

export class SpellDto {
    @ApiProperty()
    readonly schoolName: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly tier: number;

    @ApiProperty()
    readonly spellType: string[];

    @ApiProperty( { type: [Number] } )
    readonly spellCost: number[];
  }
