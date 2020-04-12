import { Document } from 'mongoose';
import { RANGED_WEAPONS_TYPE, RANGE_STR_MULTIPLIER } from 'src/types/types';

export interface IRangedWeapons extends Document {
  name: string;
  weaponType: RANGED_WEAPONS_TYPE;
  rangeType: RANGE_STR_MULTIPLIER;
  range: number;
  baseDamage: number;
  damageDice: string[];
  strRequirement: number;
  weight: number;
  cost: string;
  description: string;
}
