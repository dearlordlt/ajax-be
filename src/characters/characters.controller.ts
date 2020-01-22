import { Controller, Get, UseGuards, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { Characters } from './characters.interface';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';
import { CharactersDto } from './characters.dto';

@ApiBearerAuth()
@ApiTags('Characters')
@Controller('character')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Characters[]> {
    return this.charactersService.findAll();
  }

  @ApiBody({ type: CharactersDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() charactersDto: CharactersDto): Promise<Characters> {
    return this.charactersService.create(charactersDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.charactersService.delete(id);
  }

  @ApiBody({ type: CharactersDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() charactersDto: CharactersDto, @Param('id') id: string): Promise<Characters> {
    return this.charactersService.update(id, charactersDto);
 }

}
