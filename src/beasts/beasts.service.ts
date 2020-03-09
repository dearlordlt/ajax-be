import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IBeasts } from './beasts.interface';
import { BeastsDto } from './beasts.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class BeastsService {
  constructor(
    @InjectModel('IBeasts') private readonly BeastsModule: Model<IBeasts>,
  ) {}

  async create(beastsDto: BeastsDto): Promise<IBeasts> {
    const createdBeasts = new this.BeastsModule(beastsDto);
    return await createdBeasts.save();
  }

  async findAll(): Promise<IBeasts[]> {
    return await this.BeastsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.BeastsModule.deleteOne( {_id: id} );
 }

  async update(id: string, beastsDto: BeastsDto): Promise<IBeasts> {
   return await this.BeastsModule.findByIdAndUpdate(id, beastsDto, {new: true});
 }
}
