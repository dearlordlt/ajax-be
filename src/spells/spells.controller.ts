import { Spell } from './spells.interface';
import { SpellsService } from './spells.service';
import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { CreateSpellDto } from './spells.dto';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

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
}
