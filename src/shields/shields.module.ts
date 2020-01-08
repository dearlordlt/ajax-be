import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShieldsController } from './shields.controller';
import { ShieldsService } from './shields.service';
import { ShieldsSchema } from 'src/models/shields';

@Module({})

@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Shield', schema: ShieldsSchema }]),
    ],
    controllers: [ShieldsController],
    providers: [ShieldsService],
  })
  export class ShieldsModule {}
