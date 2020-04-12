import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponsDto } from './ranged-weapons.dto';
import { DeleteResponse } from 'src/types/types';
import e = require('express');

@Injectable()
export class RangedWeaponsService {
  constructor(
    @InjectModel('RangedWeapon') private readonly RangedWeaponsModule: Model<IRangedWeapons>,
  ) {}

  async create(rangedweaponsDto: RangedWeaponsDto): Promise<IRangedWeapons> {
    const createdRangedWeapon = new this.RangedWeaponsModule(rangedweaponsDto);
    return await createdRangedWeapon.save();
  }

  async findAll(): Promise<IRangedWeapons[]> {
    return await this.RangedWeaponsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.RangedWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, rangedweaponsDto: RangedWeaponsDto): Promise<IRangedWeapons> {
    return await this.RangedWeaponsModule.findByIdAndUpdate(id, rangedweaponsDto, {new: true});
  }
}
