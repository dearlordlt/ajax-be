import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponsDto } from './ranged-weapons.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class RangedWeaponsService {
  constructor(
    @InjectModel('RangedWeapon') private readonly RangedWeaponsModule: Model<RangedWeapons>,
  ) {}

  async create(rangedweaponsDto: RangedWeaponsDto): Promise<RangedWeapons> {
    const createdRangedWeapon = new this.RangedWeaponsModule(rangedweaponsDto);
    return await createdRangedWeapon.save();
  }

  async findAll(): Promise<RangedWeapons[]> {
    return await this.RangedWeaponsModule.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.RangedWeaponsModule.deleteOne( {_id: id} );
 }

  async update(id: string, rangedweaponsDto: RangedWeaponsDto): Promise<RangedWeapons> {
    return await this.RangedWeaponsModule.findByIdAndUpdate(id, rangedweaponsDto, {new: true});
  }
}
