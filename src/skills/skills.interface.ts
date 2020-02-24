import { SKILL } from '../types/types';
import { Document } from 'mongoose';

export interface Skill extends Document {
  name: string;
  description: string;
  skillType: SKILL;
}
