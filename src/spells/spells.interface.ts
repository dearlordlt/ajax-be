import { SPELL } from '../types/types';
import { Document } from 'mongoose';

export interface Spell extends Document {
  name: string;
  description: string;
  type: SPELL;
}
