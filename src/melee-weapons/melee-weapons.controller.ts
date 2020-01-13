import { Controller, Body, Get, Post, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { MeleeweaponsDto } from './melee-weapons.dto';
import { MeleeWeapons } from './melee-weapons.interface';
import { MeleeWeaponsService } from './melee-weapons.service';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Melee-weapons')
@Controller('melee-weapons')
export class MeleeWeaponsController {
  constructor(private readonly meleeWeaponsService: MeleeWeaponsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<MeleeWeapons[]> {
    return this.meleeWeaponsService.findAll();
  }

  @ApiBody({ type: MeleeweaponsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() meleeweaponsDto: MeleeweaponsDto): Promise<MeleeWeapons> {
    return this.meleeWeaponsService.create(meleeweaponsDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.meleeWeaponsService.delete(id);
  }

  @ApiBody({ type: MeleeweaponsDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() meleeweaponsDto: MeleeweaponsDto, @Param('id') id: string): Promise<MeleeWeapons> {
    return this.meleeWeaponsService.update(id, meleeweaponsDto);
 }
}
