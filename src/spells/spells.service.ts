import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ISpell } from './spells.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SpellDto } from './spells.dto';
import { DeleteResponse } from 'src/types/types';
import { ISpellQuery } from './spellsquery.interface';

@Injectable()
export class SpellsService {
  constructor(
    @InjectModel('Spell') private readonly spellModel: Model<ISpell>,
  ) {}

  async create(spellDto: SpellDto): Promise<ISpell> {
    const createdSpell = new this.spellModel(spellDto);
    return await createdSpell.save();
  }

  async findAll(query: any): Promise<ISpell[]> {

    const spellQuery: ISpellQuery = {};

    if (query.name) {
      spellQuery.name = { $regex: query.name, $options: 'i'};
    }

    if (query.schoolName) {
      spellQuery.schoolName = query.schoolName;
    }

    if (query.tier) {
      spellQuery.tier = query.tier;
    }

    if (query.spellType) {
      spellQuery.spellType = query.spellType;
    }

    if (query.spellCost) {
      spellQuery.spellCost = query.spellCost;
    }

    return await this.spellModel.find(spellQuery).exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.spellModel.deleteOne( {_id: id} );
 }
  async update(id: string, spellDto: SpellDto): Promise<ISpell> {
   return await this.spellModel.findByIdAndUpdate(id, spellDto, {new: true});
 }
}
