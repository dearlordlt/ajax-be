import { Document } from 'mongoose';

export interface MeleeWeapons extends Document {
    name: string;
    range: number[];
    swingbaseDamage: number;
    swingDices: string[];
    thrustbaseDamage: number;
    thrustDices: string[];
    weigth: number;
    cost: string;
    description: string;
  }
