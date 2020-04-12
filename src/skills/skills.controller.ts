import { ISkill } from './skills.interface';
import { SkillsService } from './skills.service';
import { Controller, Get, Post, Body, UseGuards, Delete, Param, Put, Query } from '@nestjs/common';
import { SkillDto } from './skills.dto';
import { ApiBearerAuth, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Skills')
@Controller('skills')
export class SkillsController {
  constructor(private readonly skillService: SkillsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'skillType', required: false })
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query: string): Promise<ISkill[]> {
    return this.skillService.findAll(query);
  }

  @ApiBody({ type: SkillDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() skillDto: SkillDto): Promise<ISkill> {
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
  update(@Body() skillDto: SkillDto, @Param('id') id: string): Promise<ISkill> {
    return this.skillService.update(id, skillDto);
 }
}
