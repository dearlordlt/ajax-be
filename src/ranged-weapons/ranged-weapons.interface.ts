import { Document } from 'mongoose';
import { RANGED_WEAPONSTYPE, RANGE_STR_MULTIPLIER } from 'src/types/types';

export interface RangedWeapons extends Document {
  name: string;
  weaponType: RANGED_WEAPONSTYPE;
  rangeType: RANGE_STR_MULTIPLIER;
  range: number;
  baseDamage: number;
  damageDice: string[];
  strRequirement: number;
  weight: number;
  cost: string;
  description: string;
}
