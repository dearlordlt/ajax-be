import { SKILL } from '../types/types';
import { Model, Document } from 'mongoose';

export interface Skill extends Document {
  name: string;
  description: string;
  type: SKILL;
}
