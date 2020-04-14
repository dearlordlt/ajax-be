import { Controller, Body, Get, Post, UseGuards, Delete, Param, Put, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MeleeWeaponDto } from './melee-weapons.dto';
import { IMeleeWeapons } from './melee-weapons.interface';
import { MeleeWeaponsService } from './melee-weapons.service';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Melee-weapons')
@Controller('melee-weapons')
export class MeleeWeaponsController {
  constructor(private readonly meleeWeaponsService: MeleeWeaponsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'range', required: false })
  @ApiQuery({ name: 'strRequirement', required: false })
  @ApiQuery({ name: 'weight', required: false })
  @ApiQuery({ name: 'weaponSkills', required: false })
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query: string): Promise<IMeleeWeapons[]> {
    return this.meleeWeaponsService.findAll(query);
  }

  @ApiBody({ type: MeleeWeaponDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() meleeWeaponDto: MeleeWeaponDto): Promise<IMeleeWeapons> {
    return this.meleeWeaponsService.create(meleeWeaponDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.meleeWeaponsService.delete(id);
  }

  @ApiBody({ type: MeleeWeaponDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() meleeWeaponDto: MeleeWeaponDto, @Param('id') id: string): Promise<IMeleeWeapons> {
    return this.meleeWeaponsService.update(id, meleeWeaponDto);
 }
}
