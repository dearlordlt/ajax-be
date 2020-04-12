import { Controller, Get, UseGuards, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody, ApiProperty, ApiQuery } from '@nestjs/swagger';
import { RangedWeaponsService } from './ranged-weapons.service';
import { AuthGuard } from '@nestjs/passport';
import { IRangedWeapons } from './ranged-weapons.interface';
import { RangedWeaponsDto } from './ranged-weapons.dto';
import { DeleteResponse, RANGED_WEAPONSTYPE, RANGE_STR_MULTIPLIER } from 'src/types/types';

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
  weaponType?: RANGED_WEAPONSTYPE;
  rangeType?: RANGE_STR_MULTIPLIER;
  range?: number;
  strRequirement?: number;
  weight?: number;

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
  update(@Body() rangedWeaponsDto: RangedWeaponsDto, @Param('id') id: string): Promise<IRangedWeapons> {
    return this.rangedWeaponsService.update(id, rangedWeaponsDto);
 }
}
