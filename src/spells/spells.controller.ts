import { Spell } from './spells.interface';
import { SpellsService } from './spells.service';
import { Controller, UseGuards, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreateSpellDto } from './spells.dto';
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

  @ApiBody({ type: CreateSpellDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createItemDto: CreateSpellDto): Promise<Spell> {
    return this.spellService.create(createItemDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.spellService.delete(id);
  }
}
