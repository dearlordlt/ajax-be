import { ApiProperty } from '@nestjs/swagger';
import { RANGED_WEAPONS_TYPE, RANGE_STR_MULTIPLIER } from 'src/types/types';

export class RangedWeaponDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly weaponType: RANGED_WEAPONS_TYPE;

    @ApiProperty()
    readonly rangeType: RANGE_STR_MULTIPLIER;

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
