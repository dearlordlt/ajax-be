import { SPELL_COST_TYPE } from '../types/types';
import { Document } from 'mongoose';

export interface Spell extends Document {
  schoolName: string;
  name: string;
  tier: number;
  description: string;
  spellType: number[];
  spellCostType: SPELL_COST_TYPE;
  spellCost: number[];
}
