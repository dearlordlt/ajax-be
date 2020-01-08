import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { ShieldsService } from './shields.service';
import { AuthGuard } from '@nestjs/passport';
import { Shields } from './shields.interface';
import { CreateShieldsDto } from './shields.dto';

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
}
