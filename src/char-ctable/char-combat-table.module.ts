import { Module } from '@nestjs/common';
import { CharCombatTableService } from './char-combat-table.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharCTableController } from './char-combat-table.controller';
import { CharCombatTableSchema } from 'src/models/char-combat-table.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CharCombatTable', schema: CharCombatTableSchema },
    ]),
  ],
  controllers: [CharCTableController],
  providers: [CharCombatTableService],
})
export class CharCTableModule {}
