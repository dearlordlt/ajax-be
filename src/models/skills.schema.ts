import * as mongoose from 'mongoose';

export const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  type: {
    type: String,
    enum: ['COMBAT', 'SOCIAL'],
  },
});
