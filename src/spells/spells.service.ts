import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ISpell } from './spells.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SpellDto } from './spells.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class SpellsService {
  constructor(
    @InjectModel('Spell') private readonly spellModel: Model<ISpell>,
  ) {}

  async create(spellDto: SpellDto): Promise<ISpell> {
    const createdSpell = new this.spellModel(spellDto);
    return await createdSpell.save();
  }

  async findAll(): Promise<ISpell[]> {
    return await this.spellModel.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.spellModel.deleteOne( {_id: id} );
 }
  async update(id: string, spellDto: SpellDto): Promise<ISpell> {
   return await this.spellModel.findByIdAndUpdate(id, spellDto, {new: true});
 }
}
