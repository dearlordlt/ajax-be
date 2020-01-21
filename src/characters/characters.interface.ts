import { Document } from 'mongoose';

export interface Characters extends Document {
    name: string;
    age: number;
    description: string;
}