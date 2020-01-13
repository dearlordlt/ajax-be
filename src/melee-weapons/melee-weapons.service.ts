import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MeleeWeapons } from './melee-weapons.interface';
import { InjectModel } from '@nestjs/mongoose';
import { MeleeweaponsDto } from './melee-weapons.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class MeleeWeaponsService {
  constructor(
    @InjectModel('MeleeWeapon') private readonly MeleeWeaponsModule: Model<MeleeWeapons>,
  ) {}

  async create(meleeweaponsDto: MeleeweaponsDto): Promise<MeleeWeapons> {
    const createdMeleeWeapon = new this.MeleeWeaponsModule(meleeweaponsDto);
    return await createdMeleeWeapon.save();
  }

  async findAll(): Promise<MeleeWeapons[]> {
    return await this.MeleeWeaponsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.MeleeWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, meleeweaponsDto: MeleeweaponsDto): Promise<MeleeWeapons> {
   return await this.MeleeWeaponsModule.findByIdAndUpdate(id, meleeweaponsDto, {new: true});
 }
}
