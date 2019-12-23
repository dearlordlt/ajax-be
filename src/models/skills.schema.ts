import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: String,
  description: String,
  type: {
    type: String,
    enum: ['COMBAT', 'SOCIAL'],
  },
});
