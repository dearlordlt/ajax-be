import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MeleeWeapons } from './melee-weapons.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMeleeweaponsDto } from './melee-weapons.dto';

@Injectable()
export class MeleeWeaponsService {
  constructor(
    @InjectModel('MeleeWeapon') private readonly MeleeWeaponsModule: Model<MeleeWeapons>,
  ) {}

  async create(createMeleeweaponsDto: CreateMeleeweaponsDto): Promise<MeleeWeapons> {
    const createdMeleeWeapon = new this.MeleeWeaponsModule(createMeleeweaponsDto);
    return await createdMeleeWeapon.save();
  }

  async findAll(): Promise<MeleeWeapons[]> {
    return await this.MeleeWeaponsModule.find().exec();
  }
}
