import { Injectable } from '@nestjs/common';
import { CreateShieldsDto } from './shields.dto';
import { Shields } from './shields.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShieldsService {
  constructor(
    @InjectModel('Shield') private readonly ShieldsModule: Model<Shields>,
    ) {}

    async create(createShieldsDto: CreateShieldsDto): Promise<Shields> {
    const createdShields = new this.ShieldsModule(createShieldsDto);
    return await createdShields.save();
    }

    async findAll(): Promise<Shields[]> {
    return await this.ShieldsModule.find().exec();
    }
}