import * as mongoose from 'mongoose';

export const MeleeWeaponSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  range: {
    type: [Number],
  },
  swingbaseDamage: Number,
  swingDices: [String],
  thrustbaseDamage: Number,
  thrustDices: [String],
  weight: Number,
  cost: String,
  description: String,
}).index({name: 1});