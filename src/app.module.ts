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
import { BeastsController } from './beasts/beasts.controller';
import { BeastsModule } from './beasts/beasts.module';
import { AdvantagesController } from './advantages/advantages.controller';
import { AdvantagesModule } from './advantages/advantages.module';

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
    BeastsModule,
    AdvantagesModule,
  ],
  controllers: [AppController, AdvantagesController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule { }
