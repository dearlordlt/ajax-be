import { ApiProperty } from '@nestjs/swagger';
import { RANGEDWEAPONS, RANGEDWEAPONSTYPE } from 'src/types/types';

export class CreateRangedWeaponsDto {
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
    readonly strReaquirement: number;

    @ApiProperty()
    readonly weigth: number;

    @ApiProperty()
    readonly cost: string;

    @ApiProperty()
    readonly description: string;
  }
