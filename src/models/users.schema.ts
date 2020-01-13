import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
  },
}).index({name: 1});
