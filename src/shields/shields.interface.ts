import { Document } from 'mongoose';

export interface Shields extends Document {
    name: string;
    weight: number;
    defence: number;
    hp: number;
    cost: string;
}
