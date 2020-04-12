import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IMeleeWeapons } from './melee-weapons.interface';
import { InjectModel } from '@nestjs/mongoose';
import { MeleeWeaponsDto } from './melee-weapons.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class MeleeWeaponsService {
  constructor(
    @InjectModel('MeleeWeapon') private readonly MeleeWeaponsModule: Model<IMeleeWeapons>,
  ) {}

  async create(meleeWeaponsDto: MeleeWeaponsDto): Promise<IMeleeWeapons> {
    const createdMeleeWeapon = new this.MeleeWeaponsModule(meleeWeaponsDto);
    return await createdMeleeWeapon.save();
  }

  async findAll(): Promise<IMeleeWeapons[]> {
    return await this.MeleeWeaponsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.MeleeWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, meleeWeaponsDto: MeleeWeaponsDto): Promise<IMeleeWeapons> {
   return await this.MeleeWeaponsModule.findByIdAndUpdate(id, meleeWeaponsDto, {new: true});
 }
}
