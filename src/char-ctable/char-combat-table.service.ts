import { Injectable } from '@nestjs/common';
import { ICharCombatTable } from './char-combat-table.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResponse } from 'src/types/types';
import { CharCombatTableDto } from './char-combat-table.dto';

@Injectable()
export class CharCombatTableService {
  constructor(
    @InjectModel('CharCombatTable')
    private readonly CharCTableModule: Model<ICharCombatTable>,
  ) {}

  async create(
    charCombatTableDto: CharCombatTableDto,
  ): Promise<ICharCombatTable> {
    const CharCombatTable = new this.CharCTableModule(charCombatTableDto);
    return await CharCombatTable.save();
  }

  async find(): Promise<ICharCombatTable[]> {
    return await this.CharCTableModule.find();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.CharCTableModule.deleteOne({ _id: id });
  }

  async save(
    id: string,
    charCombatTableDto: CharCombatTableDto,
  ): Promise<ICharCombatTable> {
    return await this.CharCTableModule.findOneAndUpdate(
      { _id: id },
      charCombatTableDto,
      { upsert: true },
    );
  }
}
