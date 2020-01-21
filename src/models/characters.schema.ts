import * as mongoose from 'mongoose';

export const CharactersSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  age: Number,
  description: String,
}).index({name: 1});
