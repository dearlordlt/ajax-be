import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBeastsAndCreatures } from './beasts-and-creatures.interface';
import { BeastsAndCreaturesDto } from './beasts-and-creatures.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class BeastsAndCreaturesService {
  constructor(
    @InjectModel('BeastsAndCreatures') private readonly BeastsAndCreaturesModule: Model<IBeastsAndCreatures>,
  ) {}

  async create(beastsAndCreaturesDto: BeastsAndCreaturesDto): Promise<IBeastsAndCreatures> {
    const createdBeastsAndCreatures = new this.BeastsAndCreaturesModule(beastsAndCreaturesDto);
    return await createdBeastsAndCreatures.save();
  }

  async findAll(): Promise<IBeastsAndCreatures[]> {
    return await this.BeastsAndCreaturesModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.BeastsAndCreaturesModule.deleteOne( {_id: id} );
 }

  async update(id: string, beastsAndCreaturesDto: BeastsAndCreaturesDto): Promise<IBeastsAndCreatures> {
   return await this.BeastsAndCreaturesModule.findByIdAndUpdate(id, beastsAndCreaturesDto, {new: true});
 }
}
