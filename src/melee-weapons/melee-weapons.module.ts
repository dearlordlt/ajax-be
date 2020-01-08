import { Module } from '@nestjs/common';
import { MeleeWeaponsController } from './melee-weapons.controller';
import { MeleeWeaponsService } from './melee-weapons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MeleeWeaponSchema } from 'src/models/melee-weapons';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'MeleeWeapon', schema: MeleeWeaponSchema }]),
    ],
    controllers: [MeleeWeaponsController],
    providers: [MeleeWeaponsService],
  })
  export class MeleeWeaponsModule {}
