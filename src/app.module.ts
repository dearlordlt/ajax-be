import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './skills/skills.module';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SpellsModule } from './spells/spells.module';
import { MeleeWeaponsModule } from './melee-weapons/melee-weapons.module';
import { RangedWeaponsModule } from './ranged-weapons/ranged-weapons.module';
import { ShieldsModule } from './shields/shields.module';
import { CharacterModule } from './characters/characters.module';
import { BeastsAndCreaturesController } from './beasts-and-creatures/beasts-and-creatures.controller';
import { BeastsAndCreaturesModule } from './beasts-and-creatures/beasts-and-creatures.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/ajax-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    SkillsModule,
    MorganModule.forRoot(),
    SpellsModule,
    MeleeWeaponsModule,
    RangedWeaponsModule,
    ShieldsModule,
    CharacterModule,
    BeastsAndCreaturesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule { }
