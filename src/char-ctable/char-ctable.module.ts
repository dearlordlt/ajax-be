import { Module } from '@nestjs/common';
import { CharCTableService } from './char-ctable.service';
import { CharactersController } from 'src/characters/characters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CharCTableController } from './char-ctable.controller';
import { CharCombatTableSchema } from 'src/models/char-combat-table.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CharCombatTableSchema', schema: CharCombatTableSchema },
    ]),
  ],
  controllers: [CharCTableController],
  providers: [CharCTableService],
})
export class CharCTableModule {}
