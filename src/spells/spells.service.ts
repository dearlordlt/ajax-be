import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Spell } from './spells.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpellDto } from './spells.dto';

@Injectable()
export class SpellsService {
  constructor(
    @InjectModel('Spell') private readonly spellModel: Model<Spell>,
  ) {}

  async create(createSpellDto: CreateSpellDto): Promise<Spell> {
    const createdSpell = new this.spellModel(createSpellDto);
    return await createdSpell.save();
  }

  async findAll(): Promise<Spell[]> {
    return await this.spellModel.find().exec();
  }
}