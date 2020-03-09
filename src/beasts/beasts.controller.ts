import { Controller, Body, Get, Post, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';
import { BeastsDto } from './beasts.dto';
import { IBeasts } from './beasts.interface';
import { BeastsService } from './beasts.service';

@ApiBearerAuth()
@ApiTags('Beasts')
@Controller('beasts')
export class BeastsController {
  constructor(private readonly beastsService: BeastsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<IBeasts[]> {
    return this.beastsService.findAll();
  }

  @ApiBody({ type: BeastsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() beastsDto: BeastsDto): Promise<IBeasts> {
    return this.beastsService.create(beastsDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.beastsService.delete(id);
  }

  @ApiBody({ type: BeastsDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() beastsDto: BeastsDto, @Param('id') id: string): Promise<IBeasts> {
    return this.beastsService.update(id, beastsDto);
 }
}
