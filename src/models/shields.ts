import * as mongoose from 'mongoose';

export const ShieldsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  weight: Number,
  defence: Number,
  hp: Number,
  cost: String,
});
