import { Controller, Get, UseGuards, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { ShieldsService } from './shields.service';
import { AuthGuard } from '@nestjs/passport';
import { Shields } from './shields.interface';
import { DeleteResponse } from 'src/types/types';
import { ShieldsDto } from './shields.dto';

@ApiBearerAuth()
@ApiTags('Shields')
@Controller('shields')
export class ShieldsController {
  constructor(private readonly shieldsService: ShieldsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Shields[]> {
    return this.shieldsService.findAll();
  }

  @ApiBody({ type: ShieldsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() shieldsDto: ShieldsDto): Promise<Shields> {
    return this.shieldsService.create(shieldsDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.shieldsService.delete(id);
  }

  @ApiBody({ type: ShieldsDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() shieldsDto: ShieldsDto, @Param('id') id: string): Promise<Shields> {
    return this.shieldsService.update(id, shieldsDto);
 }
}
