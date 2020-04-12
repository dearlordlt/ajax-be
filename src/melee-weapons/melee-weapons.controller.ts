import { Controller, Body, Get, Post, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MeleeWeaponsDto } from './melee-weapons.dto';
import { IMeleeWeapons } from './melee-weapons.interface';
import { MeleeWeaponsService } from './melee-weapons.service';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Melee-weapons')
@Controller('melee-weapons')
export class MeleeWeaponsController {
  constructor(private readonly meleeWeaponsService: MeleeWeaponsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<IMeleeWeapons[]> {
    return this.meleeWeaponsService.findAll();
  }

  @ApiBody({ type: MeleeWeaponsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() meleeWeaponsDto: MeleeWeaponsDto): Promise<IMeleeWeapons> {
    return this.meleeWeaponsService.create(meleeWeaponsDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.meleeWeaponsService.delete(id);
  }

  @ApiBody({ type: MeleeWeaponsDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() meleeWeaponsDto: MeleeWeaponsDto, @Param('id') id: string): Promise<IMeleeWeapons> {
    return this.meleeWeaponsService.update(id, meleeWeaponsDto);
 }
}
