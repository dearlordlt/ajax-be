import * as mongoose from 'mongoose';

export const BeastsAndCreaturesSchema = new mongoose.Schema({
  npc: {
    type: String,
    unique: true,
  },
  attributes: {
    str: Number,
    dex: Number,
    ref: Number,
    hp: Number,
    move: {
      ground: Number,
      flight: Number,
    },
  },
  talents: {
    sense: Number,
    fitness: Number,
    awareness: Number,
    intelligence: Number,
  },
  stats: {
    att: Number,
    def: Number,
    DMG: String,
  },
  abilities: [String],
  weight: String,
});
