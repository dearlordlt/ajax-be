import { Spell } from './spells.interface';
import { SpellsService } from './spells.service';
import { Controller, UseGuards, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { SpellDto } from './spells.dto';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Spells')
@Controller('spells')

@Controller('spells')
export class SpellsController {
  constructor(private readonly spellService: SpellsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Spell[]> {
    return this.spellService.findAll();
  }

  @ApiBody({ type: SpellDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() spellDto: SpellDto): Promise<Spell> {
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
  update(@Body() spellDto: SpellDto, @Param('id') id: string): Promise<Spell> {
    return this.spellService.update(id, spellDto);
 }
}
