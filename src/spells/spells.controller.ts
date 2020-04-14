import { ISpell } from './spells.interface';
import { SpellsService } from './spells.service';
import { Controller, UseGuards, Get, Post, Body, Delete, Param, Put, Query } from '@nestjs/common';
import { SpellDto } from './spells.dto';
import { ApiTags, ApiBearerAuth, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Spells')
@Controller('spells')

@Controller('spells')
export class SpellsController {
  constructor(private readonly spellService: SpellsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'schoolName', required: false })
  @ApiQuery({ name: 'tier', required: false })
  @ApiQuery({ name: 'spellType', required: false })
  @ApiQuery({ name: 'spellCost', required: false })
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query: string): Promise<ISpell[]> {
    return this.spellService.findAll(query);
  }

  @ApiBody({ type: SpellDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() spellDto: SpellDto): Promise<ISpell> {
    return this.spellService.create(spellDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.spellService.delete(id);
  }
  @ApiBody({ type: SpellDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() spellDto: SpellDto, @Param('id') id: string): Promise<ISpell> {
    return this.spellService.update(id, spellDto);
 }
}
