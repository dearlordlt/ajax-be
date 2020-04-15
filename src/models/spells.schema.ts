import * as mongoose from 'mongoose';

export const SpellSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  schoolName: String,
  description: String,
  tier: Number,
  spellType: [String],
  spellCost: {
    type: Array,
  },
}).index({name: 1});
