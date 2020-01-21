import { Module } from '@nestjs/common';
import { RangedWeaponsService } from './ranged-weapons.service';
import { RangedWeaponsController } from './ranged-weapons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RangedWeaponsSchema } from 'src/models/ranged-weapons.schema';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: 'RangedWeapon', schema: RangedWeaponsSchema }]),
  ],
  controllers: [RangedWeaponsController],
  providers: [RangedWeaponsService],
})
export class RangedWeaponsModule {}
