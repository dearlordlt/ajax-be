import { ApiProperty } from '@nestjs/swagger';
import { RANGEDWEAPONSTYPE, RANGEDWEAPONS } from 'src/types/types';

export class RangedWeaponsDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly weaponType: RANGEDWEAPONSTYPE;

    @ApiProperty()
    readonly rangeType: RANGEDWEAPONS;

    @ApiProperty()
    readonly range: number;

    @ApiProperty()
    readonly baseDamage: number;

    @ApiProperty()
    readonly damageDice: string[];

    @ApiProperty()
    readonly strRequirement: number;

    @ApiProperty()
    readonly weight: number;

    @ApiProperty()
    readonly cost: string;

    @ApiProperty()
    readonly description: string;
}
