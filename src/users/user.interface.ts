import { ROLE } from './../types/types';
import { Model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password?: string;
  email?: string;
  role?: ROLE;
}
