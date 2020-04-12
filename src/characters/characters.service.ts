import { Injectable } from '@nestjs/common';
import { DeleteResponse } from 'src/types/types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICharacters } from './characters.interface';
import { CharactersDto } from './characters.dto';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel('Characters') private readonly CharactersModule: Model<ICharacters>,
  ) {}

  async create(charactersDto: CharactersDto): Promise<ICharacters> {
    charactersDto.createdAt = new Date();
    const createdCharacter = new this.CharactersModule(charactersDto);
    return await createdCharacter.save();
  }

  async findAll(): Promise<ICharacters[]> {
    return await this.CharactersModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.CharactersModule.deleteOne( {_id: id} );
  }

  async update(id: string, charactersDto: CharactersDto): Promise<ICharacters> {
    charactersDto.updatedAt = new Date();
    return await this.CharactersModule.findByIdAndUpdate(id, charactersDto, {new: true});
  }

}
