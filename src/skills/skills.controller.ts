import { Skill } from './skills.interface';
import { SkillsService } from './skills.service';
import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put } from '@nestjs/common';
import { SkillDto } from './skills.dto';
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

  @ApiBody({ type: SkillDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() skillDto: SkillDto): Promise<Skill> {
    return this.skillService.create(skillDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.skillService.delete(id);
  }
  @ApiBody({ type: SkillDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Body() skillDto: SkillDto, @Param('id') id: string): Promise<Skill> {
    return this.skillService.update(id, skillDto);
 }
}
