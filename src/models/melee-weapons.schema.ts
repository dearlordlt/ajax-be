import * as mongoose from 'mongoose';

export const MeleeWeaponSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  range: {
    type: [Number],
  },
  swingBaseDamage: Number,
  swingDices: [String],
  thrustBaseDamage: Number,
  thrustDices: [String],
  strRequirement: Number,
  weight: Number,
  cost: String,
  description: String,
}).index({name: 1});
