import { Module } from '@nestjs/common';
import { SpellsController } from './spells.controller';
import { SpellsService } from './spells.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpellSchema } from 'src/models/spells.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Spell', schema: SpellSchema }]),
  ],
  controllers: [SpellsController],
  providers: [SpellsService],
})
export class SpellsModule {}
