import { Controller, Body, Get, Post, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';
import { BeastsAndCreaturesDto } from './beasts-and-creatures.dto';
import { BeastsAndCreatures } from './beasts-and-creatures.interface';
import { BeastsAndCreaturesService } from './beasts-and-creatures.service';

@ApiBearerAuth()
@ApiTags('Beasts-and-creatures')
@Controller('beasts-and-creatures')
export class BeastsAndCreaturesController {
  constructor(private readonly beastsAndCreaturesService: BeastsAndCreaturesService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<BeastsAndCreatures[]> {
    return this.beastsAndCreaturesService.findAll();
  }

  @ApiBody({ type: BeastsAndCreaturesDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() beastsAndCreaturesDto: BeastsAndCreaturesDto): Promise<BeastsAndCreatures> {
    return this.beastsAndCreaturesService.create(beastsAndCreaturesDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.beastsAndCreaturesService.delete(id);
  }

  @ApiBody({ type: BeastsAndCreaturesDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() beastsAndCreaturesDto: BeastsAndCreaturesDto, @Param('id') id: string): Promise<BeastsAndCreatures> {
    return this.beastsAndCreaturesService.update(id, beastsAndCreaturesDto);
 }
}
