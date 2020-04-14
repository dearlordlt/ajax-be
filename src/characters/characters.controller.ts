import { Controller, Get, UseGuards, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
<<<<<<< HEAD
import { ICharacters } from './characters.interface';
=======
import { ICharacter } from './character.interface';
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';
import { CharactersDto } from './characters.dto';

@ApiBearerAuth()
@ApiTags('Characters')
@Controller('character')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
<<<<<<< HEAD
  findAll(): Promise<ICharacters[]> {
=======
  findAll(): Promise<ICharacter[]> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
    return this.charactersService.findAll();
  }

  @ApiBody({ type: CharactersDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
<<<<<<< HEAD
  create(@Body() charactersDto: CharactersDto): Promise<ICharacters> {
=======
  create(@Body() charactersDto: CharactersDto): Promise<ICharacter> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
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
<<<<<<< HEAD
  update(@Body() charactersDto: CharactersDto, @Param('id') id: string): Promise<ICharacters> {
=======
  update(@Body() charactersDto: CharactersDto, @Param('id') id: string): Promise<ICharacter> {
>>>>>>> e8c6d87c0482612439c153b0bd9478e5b97f05cf
    return this.charactersService.update(id, charactersDto);
  }

}
