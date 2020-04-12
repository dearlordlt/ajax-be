import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody, ApiProperty } from '@nestjs/swagger';
import { RangedWeaponsService } from './ranged-weapons.service';
import { AuthGuard } from '@nestjs/passport';
import { IRangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponsDto } from './ranged-weapons.dto';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Ranged-weapons')
@Controller('ranged-weapons')
export class RangedWeaponsController {
  constructor(private readonly rangedWeaponsService: RangedWeaponsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<IRangedWeapons[]> {
    return this.rangedWeaponsService.findAll();
  }

  @ApiBody({ type: RangedWeaponsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() rangedWeaponsDto: RangedWeaponsDto): Promise<IRangedWeapons> {
    return this.rangedWeaponsService.create(rangedWeaponsDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.rangedWeaponsService.delete(id);
  }

  @ApiBody({ type: RangedWeaponsDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() rangedweaponsDto: RangedWeaponsDto, @Param('id') id: string): Promise<IRangedWeapons> {
    return this.rangedWeaponsService.update(id, rangedweaponsDto);
 }
}
