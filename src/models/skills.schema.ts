import { SKILL_TYPES } from './../types/types';
import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: {
    type: String,
    enum: SKILL_TYPES,
  },
});
