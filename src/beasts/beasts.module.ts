import { Module } from '@nestjs/common';
import { BeastsService } from './beasts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeastsController } from './beasts.controller';
import { BeastsAndCreaturesSchema } from 'src/models/Beasts-And-Creatures.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BeastsAndCreatures', schema: BeastsAndCreaturesSchema }]),
  ],
  controllers: [BeastsController],
  providers: [BeastsService],
})

export class BeastsModule {}
