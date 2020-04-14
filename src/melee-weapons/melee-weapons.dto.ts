import { ApiProperty } from '@nestjs/swagger';

export class MeleeWeaponDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty({ type: [Number] })
    readonly range: number[];

    @ApiProperty()
    readonly swingBaseDamage: number;

    @ApiProperty()
    readonly swingDices: string[];

    @ApiProperty()
    readonly thrustBaseDamage: number;

    @ApiProperty()
    readonly thrustDices: string[];

    @ApiProperty()
    readonly weight: number;

    @ApiProperty()
    readonly cost: string;

    @ApiProperty()
    readonly strRequirement: number;

    @ApiProperty()
    readonly weaponSkills: string[];

    @ApiProperty()
    readonly description: string;
}
