import { Skill } from './skills.interface';
import { SkillsService } from './skills.service';
import { Controller, Get, Post, Body, UseGuards, Delete, Param } from '@nestjs/common';
import { CreateSkillDto } from './skills.dto';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillService: SkillsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<Skill[]> {
    return this.skillService.findAll();
  }

  @ApiBody({ type: CreateSkillDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createItemDto: CreateSkillDto): Promise<Skill> {
    return this.skillService.create(createItemDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.skillService.delete(id);
  }
}
