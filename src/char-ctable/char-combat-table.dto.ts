import { ApiProperty } from '@nestjs/swagger';

export class CharCombatTableDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  // tslint:disable-next-line: variable-name
  readonly _id: string;
  @ApiProperty()
  readonly str: number;
  @ApiProperty()
  readonly sta: number;
  @ApiProperty()
  readonly dex: number;
  @ApiProperty()
  readonly per: number;
  @ApiProperty()
  readonly ref: number;
  @ApiProperty()
  readonly will: number;
  @ApiProperty()
  readonly athletics: number;
  @ApiProperty()
  readonly vigorBonus: number;
  @ApiProperty()
  readonly moveBonus: number;
  @ApiProperty()
  readonly weaponWeight: number;
  @ApiProperty()
  readonly vigorSpent: number;
  @ApiProperty()
  readonly toughness: number;
  @ApiProperty()
  readonly toughnessSpent: number;

  @ApiProperty()
  readonly sunderHeadArmor: number;
  @ApiProperty()
  readonly sunderBreastArmor: number;
  @ApiProperty()
  readonly sunderLArmArmor: number;
  @ApiProperty()
  readonly sunderRArmArmor: number;
  @ApiProperty()
  readonly sunderLLegArmor: number;
  @ApiProperty()
  readonly sunderRLegArmor: number;

  @ApiProperty()
  readonly sunderPaddingHeadArmor: number;
  @ApiProperty()
  readonly sunderPaddingBreastArmor: number;
  @ApiProperty()
  readonly sunderPaddingLArmArmor: number;
  @ApiProperty()
  readonly sunderPaddingRArmArmor: number;
  @ApiProperty()
  readonly sunderPaddingLLegArmor: number;
  @ApiProperty()
  readonly sunderPaddingRLegArmor: number;

  @ApiProperty()
  readonly heroicTurns: number;
  @ApiProperty()
  readonly heroicTurnsSpent: number;
  @ApiProperty()
  readonly heroicTurnsMultiplier: number;

  @ApiProperty()
  readonly maxMana: number;
  @ApiProperty()
  readonly manaSpent: number;
  @ApiProperty()
  readonly manaReg: number;
  @ApiProperty()
  readonly bonusMana: number;
  @ApiProperty()
  readonly currentMana: number;

  @ApiProperty()
  readonly evade: number;
  @ApiProperty()
  readonly attack: number;
  @ApiProperty()
  readonly block: number;
  @ApiProperty()
  readonly defBonus: number;

  @ApiProperty()
  readonly weaponSkill: number;
  @ApiProperty()
  readonly shieldSkill: number;
  @ApiProperty()
  readonly shieldDef: number;
  @ApiProperty()
  readonly shieldHP: number;
  @ApiProperty()
  readonly shieldDMG: number;
  @ApiProperty()
  readonly shieldHPLeft: number;
  @ApiProperty()
  readonly evadeSkill: number;

  @ApiProperty()
  readonly headWeight: number;
  @ApiProperty()
  readonly breastWeight: number;
  @ApiProperty()
  readonly lArmWeight: number;
  @ApiProperty()
  readonly rArmWeight: number;
  @ApiProperty()
  readonly lLegWeight: number;
  @ApiProperty()
  readonly rLegWeight: number;
  @ApiProperty()
  readonly shieldWeight: number;

  @ApiProperty()
  readonly pHeadWeight: number;
  @ApiProperty()
  readonly ht: number;
  @ApiProperty()
  readonly pLArmWeight: number;
  @ApiProperty()
  readonly pRArmWeight: number;
  @ApiProperty()
  readonly pLLegWeight: number;
  @ApiProperty()
  readonly pRLegWeight: number;

  @ApiProperty()
  readonly headArmor: number;
  @ApiProperty()
  readonly breastArmor: number;
  @ApiProperty()
  readonly lArmArmor: number;
  @ApiProperty()
  readonly rArmArmor: number;
  @ApiProperty()
  readonly lLegArmor: number;
  @ApiProperty()
  readonly rLegArmor: number;

  @ApiProperty()
  readonly paddingHeadArmor: number;
  @ApiProperty()
  readonly paddingBreastArmor: number;
  @ApiProperty()
  readonly paddingLArmArmor: number;
  @ApiProperty()
  readonly paddingRArmArmor: number;
  @ApiProperty()
  readonly paddingLLegArmor: number;
  @ApiProperty()
  readonly paddingRLegArmor: number;

  @ApiProperty()
  readonly encumbrance: number;
  @ApiProperty()
  readonly move: number;
  @ApiProperty()
  readonly bonusEnc: number;
  @ApiProperty()
  readonly maxVigor: number;
  @ApiProperty()
  readonly hp: number;
  @ApiProperty()
  readonly hpLeft: number;

  @ApiProperty()
  readonly dmgTH: number;
  @ApiProperty()
  readonly dmgTB: number;
  @ApiProperty()
  readonly dmgTLA: number;
  @ApiProperty()
  readonly dmgTRA: number;
  @ApiProperty()
  readonly dmgTLL: number;
  @ApiProperty()
  readonly dmgTRL: number;

  @ApiProperty()
  readonly dmgBH: number;
  @ApiProperty()
  readonly dmgBB: number;
  @ApiProperty()
  readonly dmgBLA: number;
  @ApiProperty()
  readonly dmgBRA: number;
  @ApiProperty()
  readonly dmgBLL: number;
  @ApiProperty()
  readonly dmgBRL: number;

  @ApiProperty()
  readonly dmgCH: number;
  @ApiProperty()
  readonly dmgCB: number;
  @ApiProperty()
  readonly dmgCLA: number;
  @ApiProperty()
  readonly dmgCRA: number;
  @ApiProperty()
  readonly dmgCLL: number;
  @ApiProperty()
  readonly dmgCRL: number;

  @ApiProperty()
  readonly dmgFH: number;
  @ApiProperty()
  readonly dmgFB: number;
  @ApiProperty()
  readonly dmgFLA: number;
  @ApiProperty()
  readonly dmgFRA: number;
  @ApiProperty()
  readonly dmgFLL: number;
  @ApiProperty()
  readonly dmgFRL: number;

  @ApiProperty()
  readonly minusAtt: number;
  @ApiProperty()
  readonly minusDef: number;
  @ApiProperty()
  readonly minusMove: number;
  @ApiProperty()
  readonly plusVigorCost: number;
  @ApiProperty()
  readonly penalty: number;
}
