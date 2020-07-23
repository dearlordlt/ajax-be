import { Injectable } from '@nestjs/common';
import { ICharCTable } from './char-ctable.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResponse } from 'src/types/types';
import { CharCTableDto } from './char-ctable.dto';

@Injectable()
export class CharCTableService {
  constructor(
    @InjectModel('CharCTable')
    private readonly CharCTableModule: Model<ICharCTable>,
  ) {}

  async create(charCTableDto: CharCTableDto): Promise<ICharCTable> {
    const CharCTable = new this.CharCTableModule(charCTableDto);
    return await CharCTable.save();
  }

  async find(): Promise<ICharCTable[]> {
    return await this.CharCTableModule.find();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.CharCTableModule.deleteOne({ _id: id });
  }

  async save(id: string, charCTableDto: CharCTableDto): Promise<ICharCTable> {
    return await this.CharCTableModule.findOneAndUpdate(
      { _id: id },
      charCTableDto,
      { upsert: true },
    );
  }
}
