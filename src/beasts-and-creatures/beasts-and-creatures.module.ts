import { Module } from '@nestjs/common';
import { BeastsAndCreaturesService } from './beasts-and-creatures.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeastsAndCreaturesController } from './beasts-and-creatures.controller';
import { BeastsAndCreaturesSchema } from 'src/models/Beasts-And-Creatures.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BeastsAndCreatures', schema: BeastsAndCreaturesSchema },
    ]),
  ],
  controllers: [BeastsAndCreaturesController],
  providers: [BeastsAndCreaturesService],
})
export class BeastsAndCreaturesModule {}
