import { Document } from 'mongoose';

<<<<<<< HEAD:src/characters/characters.interface.ts
export interface ICharacters extends Document {
=======
export interface ICharacter extends Document {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf:src/characters/character.interface.ts
    name: string;
    age: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}
