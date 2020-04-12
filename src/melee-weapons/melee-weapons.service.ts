import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMeleeWeapons } from './melee-weapons.interface';
import { InjectModel } from '@nestjs/mongoose';
import { MeleeWeaponDto } from './melee-weapons.dto';
import { DeleteResponse } from 'src/types/types';
import { IMWsquery } from './mwsquery.interface';

@Injectable()
export class MeleeWeaponsService {
  constructor(
    @InjectModel('MeleeWeapon') private readonly MeleeWeaponsModule: Model<IMeleeWeapons>,
  ) {}

  async create(meleeWeaponDto: MeleeWeaponDto): Promise<IMeleeWeapons> {
    const createdMeleeWeapon = new this.MeleeWeaponsModule(meleeWeaponDto);
    return await createdMeleeWeapon.save();
  }

  async findAll(query: any): Promise<IMeleeWeapons[]> {

  const RWsQuery: IMWsquery = {};

  if (query.name) {
    RWsQuery.name = { $regex: query.name, $options: 'i'};
    }

  if (query.range) {
    RWsQuery.range = query.range;
  }

  if (query.strRequirement) {
    RWsQuery.strRequirement = query.strRequirement;
  }

  if (query.weight) {
    RWsQuery.weight = query.weight;
  }

  if (query.weaponSkills) {
    RWsQuery.weaponSkills = query.weaponSkills;
  }

  return await this.MeleeWeaponsModule.find(RWsQuery).exec();
}

  async delete(id: string): Promise<DeleteResponse> {
    return await this.MeleeWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, meleeWeaponDto: MeleeWeaponDto): Promise<IMeleeWeapons> {
   return await this.MeleeWeaponsModule.findByIdAndUpdate(id, meleeWeaponDto, {new: true});
 }
}
