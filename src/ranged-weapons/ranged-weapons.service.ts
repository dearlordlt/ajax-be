import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponDto } from './ranged-weapons.dto';
import { DeleteResponse } from 'src/types/types';
import e = require('express');
import { IRWQuery } from './rwsquery.interface';

@Injectable()
export class RangedWeaponsService {
  constructor(
    @InjectModel('RangedWeapon') private readonly RangedWeaponsModule: Model<IRangedWeapons>,
  ) {}

  async create(rangedWeaponDto: RangedWeaponDto): Promise<IRangedWeapons> {
    const createdRangedWeapon = new this.RangedWeaponsModule(rangedWeaponDto);
    return await createdRangedWeapon.save();
  }

  async findAll(query: any): Promise<IRangedWeapons[]> {

    const RWsQuery: IRWQuery = {};

    if (query.name) {
      RWsQuery.name = { $regex: query.name, $options: 'i'};
    }

    if (query.weaponType) {
      RWsQuery.weaponType = query.weaponType;
    }
    if (query.rangeType) {
      RWsQuery.rangeType = query.rangeType;
    }

    if (query.range) {
      RWsQuery.range = query.range;
    }
    if (query.weight) {
      RWsQuery.strRequirement = query.weight;
    }

    if (query.weight) {
      RWsQuery.weight = query.weight;
    }

    return await this.RangedWeaponsModule.find(RWsQuery).exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.RangedWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, rangedWeaponDto: RangedWeaponDto): Promise<IRangedWeapons> {
    return await this.RangedWeaponsModule.findByIdAndUpdate(id, rangedWeaponDto, {new: true});
  }
}
