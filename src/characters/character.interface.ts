import { Document } from 'mongoose';

export interface ICharacter extends Document {
    name: string;
    age: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
