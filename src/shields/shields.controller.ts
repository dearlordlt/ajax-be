import { Controller, Get, UseGuards, Post, Body, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { ShieldsService } from './shields.service';
import { AuthGuard } from '@nestjs/passport';
import { Shields } from './shields.interface';
import { CreateShieldsDto } from './shields.dto';
import { DeleteResponse } from 'src/types/types';

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

  @ApiBody({ type: CreateShieldsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createShieldsDto: CreateShieldsDto): Promise<Shields> {
    return this.shieldsService.create(createShieldsDto);
  }

  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.shieldsService.delete(id);
  }
}
