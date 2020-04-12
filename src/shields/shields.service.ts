import { Injectable } from '@nestjs/common';
import { IShields } from './shields.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResponse } from 'src/types/types';
import { ShieldsDto } from './shields.dto';
import { IShieldsQuery } from './shieldsquery.interface';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class ShieldsService {
  constructor(
    @InjectModel('Shield') private readonly ShieldsModule: Model<IShields>,
  ) {}

  async create(shieldsDto: ShieldsDto): Promise<IShields> {
    const createdShields = new this.ShieldsModule(shieldsDto);
    return await createdShields.save();
  }

  async findAll(query: any): Promise<IShields[]> {

    const shieldsQuery: IShieldsQuery = {};

    if (query.name) {
      shieldsQuery.name = { $regex: query.name, $options: 'i'};
    }

    if (query.weight) {
      shieldsQuery.weight = query.weight;
    }

    if (query.defence) {
      shieldsQuery.defence = query.defence;
    }

    if (query.hp) {
      shieldsQuery.hp = query.hp;
    }

    return await this.ShieldsModule.find(shieldsQuery).exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.ShieldsModule.deleteOne({ _id: id });
  }

  async update(id: string, shieldsDto: ShieldsDto): Promise<IShields> {
    return await this.ShieldsModule.findByIdAndUpdate(id, shieldsDto, {new: true});
  }
}
