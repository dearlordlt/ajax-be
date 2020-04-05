import { Module } from '@nestjs/common';
import { AdvantagesService } from './advantages.service';

@Module({
  providers: [AdvantagesService],
})
export class AdvantagesModule {}
