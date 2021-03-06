import { SPELL_COST_TYPE } from '../types/types';
import { Document } from 'mongoose';

export interface ISpell extends Document {
  schoolName: string;
  name: string;
  tier: number;
  description: string;
  spellType: string[];
  spellCost: number[];
}
