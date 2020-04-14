import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { RangedWeaponsService } from './ranged-weapons.service';
import { AuthGuard } from '@nestjs/passport';
import { IRangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponDto } from './ranged-weapons.dto';
import { DeleteResponse, RANGED_WEAPONS_TYPE, RANGE_STR_MULTIPLIER } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Ranged-weapons')
@Controller('ranged-weapons')
export class RangedWeaponsController {
  constructor(private readonly rangedWeaponsService: RangedWeaponsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'weaponType', required: false })
  @ApiQuery({ name: 'rangeType', required: false })
  @ApiQuery({ name: 'range', required: false })
  @ApiQuery({ name: 'strRequirement', required: false })
  @ApiQuery({ name: 'weight', required: false })
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query: string): Promise<IRangedWeapons[]> {
    return this.rangedWeaponsService.findAll(query);
  }

  name?: string;
  weaponType?: RANGED_WEAPONS_TYPE;
  rangeType?: RANGE_STR_MULTIPLIER;
  range?: number;
  strRequirement?: number;
  weight?: number;

  @ApiBody({ type: RangedWeaponDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() rangedWeaponDto: RangedWeaponDto): Promise<IRangedWeapons> {
    return this.rangedWeaponsService.create(rangedWeaponDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.rangedWeaponsService.delete(id);
  }

  @ApiBody({ type: RangedWeaponDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() rangedWeaponDto: RangedWeaponDto, @Param('id') id: string): Promise<IRangedWeapons> {
    return this.rangedWeaponsService.update(id, rangedWeaponDto);
 }
}
