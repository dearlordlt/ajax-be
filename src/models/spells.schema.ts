import * as mongoose from 'mongoose';

export const SpellSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  spellType: {
    type: [Number],
    validate: {
      validator: (v: number[]) => v.length === 5,
    },
  },
  spellCostType: {
    type: String,
    enum: ['NUMBER', 'PERCENTAGE'],
  },
  spellCost: {
    type: Array,
  },
});
