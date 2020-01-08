import * as mongoose from 'mongoose';

export const RangedWeaponsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  weaponType: {
    type: String,
    enum: ['THROWABLE', 'BALISTIC', 'BLACKPOWDER'],
  },
  range: [Number],
  rangeType: {
    type: String,
    enum: ['MULTIPLIER', 'NUMBER'],
  },
  baseDamage: [Number],
  damageDice: [String],
  weigth: Number,
  cost: String,
  description: String,
});
