import { Injectable } from '@nestjs/common';
import { DeleteResponse } from 'src/types/types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICharacter } from './character.interface';
import { CharactersDto } from './characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel('Characters') private readonly CharactersModule: Model<ICharacter>,
  ) { }

  async create(charactersDto: CharactersDto): Promise<ICharacter> {
    charactersDto.createdAt = new Date();
    const createdCharacter = new this.CharactersModule(charactersDto);
    return await createdCharacter.save();
  }

  async findAll(): Promise<ICharacter[]> {
    return await this.CharactersModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.CharactersModule.deleteOne({ _id: id });
  }

  async update(id: string, charactersDto: CharactersDto): Promise<ICharacter> {
    charactersDto.updatedAt = new Date();
    return await this.CharactersModule.findByIdAndUpdate(id, charactersDto, { new: true });
  }

}
