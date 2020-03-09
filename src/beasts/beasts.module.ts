import { Module } from '@nestjs/common';
import { BeastsService } from './beasts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BeastsController } from './beasts.controller';
import { BeastsSchema } from 'src/models/beasts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'IBeasts', schema: BeastsSchema }]),
  ],
  controllers: [BeastsController],
  providers: [BeastsService],
})

export class BeastsModule {}
