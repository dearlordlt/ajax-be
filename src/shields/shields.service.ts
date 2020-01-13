import { Injectable } from '@nestjs/common';
import { Shields } from './shields.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DeleteResponse } from 'src/types/types';
import { ShieldsDto } from './shields.dto';

@Injectable()
export class ShieldsService {
  constructor(
    @InjectModel('Shield') private readonly ShieldsModule: Model<Shields>,
  ) {}

  async create(shieldsDto: ShieldsDto): Promise<Shields> {
    const createdShields = new this.ShieldsModule(shieldsDto);
    return await createdShields.save();
  }

  async findAll(): Promise<Shields[]> {
    return await this.ShieldsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.ShieldsModule.deleteOne({ _id: id });
  }

  async update(id: string, shieldsDto: ShieldsDto): Promise<Shields> {
    return await this.ShieldsModule.findByIdAndUpdate(id, shieldsDto, {new: true});
  }
}
