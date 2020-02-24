import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  schoolName: String,
  name: {
    type: String,
    unique: true,
  },
  tier: Number,
  description: String,
  skillType: {
    type: String,
    enum: ['COMBAT', 'SOCIAL'],
  },
}).index({name: 1});
