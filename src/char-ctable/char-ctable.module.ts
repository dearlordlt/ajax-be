import { Module } from '@nestjs/common';
import { CharCTableService } from './char-ctable.service';
import { CharactersController } from 'src/characters/characters.controller';
import { CharCTableSchema } from 'src/models/chat-ctable.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CharCTableController } from './char-ctable.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'CharCTable', schema: CharCTableSchema }]),
    ],
    controllers: [CharCTableController],
  providers: [CharCTableService],
})

export class CharCTableModule {}
