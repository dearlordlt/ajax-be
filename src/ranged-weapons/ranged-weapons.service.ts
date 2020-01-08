import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RangedWeapons } from './ranged-weapons.interface';
import { CreateRangedWeaponsDto } from './ranged-weapons.dto';

@Injectable()
export class RangedWeaponsService {
  constructor(
    @InjectModel('RangedWeapon') private readonly RangedWeaponsModule: Model<RangedWeapons>,
  ) {}

  async create(createMeleeweaponsDto: CreateRangedWeaponsDto): Promise<RangedWeapons> {
    const createdRangedWeapon = new this.RangedWeaponsModule(createMeleeweaponsDto);
    return await createdRangedWeapon.save();
  }

  async findAll(): Promise<RangedWeapons[]> {
    return await this.RangedWeaponsModule.find().exec();
  }
}
