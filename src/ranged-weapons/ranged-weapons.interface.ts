import { Document } from 'mongoose';
import { RANGEDWEAPONSTYPE, RANGEDWEAPONS } from 'src/types/types';

export interface RangedWeapons extends Document {
  name: string;
  weaponType: RANGEDWEAPONSTYPE;
  rangeType: RANGEDWEAPONS;
  range: number;
  baseDamage: number;
  damageDice: string[];
  strRequirement: number;
  weight: number;
  cost: string;
  description: string;
}
