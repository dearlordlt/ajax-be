import { Injectable } from '@nestjs/common';
import { DeleteResponse } from 'src/types/types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
<<<<<<< HEAD
import { ICharacters } from './characters.interface';
=======
import { ICharacter } from './character.interface';
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
import { CharactersDto } from './characters.dto';

@Injectable()
export class CharactersService {
  constructor(
<<<<<<< HEAD
    @InjectModel('Characters') private readonly CharactersModule: Model<ICharacters>,
  ) {}

  async create(charactersDto: CharactersDto): Promise<ICharacters> {
=======
    @InjectModel('Characters') private readonly CharactersModule: Model<ICharacter>,
  ) { }

  async create(charactersDto: CharactersDto): Promise<ICharacter> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
    charactersDto.createdAt = new Date();
    const createdCharacter = new this.CharactersModule(charactersDto);
    return await createdCharacter.save();
  }

<<<<<<< HEAD
  async findAll(): Promise<ICharacters[]> {
=======
  async findAll(): Promise<ICharacter[]> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
    return await this.CharactersModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.CharactersModule.deleteOne({ _id: id });
  }

<<<<<<< HEAD
  async update(id: string, charactersDto: CharactersDto): Promise<ICharacters> {
=======
  async update(id: string, charactersDto: CharactersDto): Promise<ICharacter> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
    charactersDto.updatedAt = new Date();
    return await this.CharactersModule.findByIdAndUpdate(id, charactersDto, { new: true });
  }

}
