import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CharactersController } from './characters.controller';
import { CharactersSchema } from 'src/models/characters.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Characters', schema: CharactersSchema }]),
    ],
    controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharacterModule {}
