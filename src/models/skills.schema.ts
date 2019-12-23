import { SkillTypes } from './../types/types';
import * as mongoose from 'mongoose';

export const SkillsSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: SkillTypes,
});
