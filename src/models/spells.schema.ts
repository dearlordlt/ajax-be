import * as mongoose from 'mongoose';

export const SpellSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  type: {
    type: String,
    enum: ['NON-COMBAT', 'COMBAT', "UTILITY", 'FORBIDDEN', 'RITUAL'] },
});


