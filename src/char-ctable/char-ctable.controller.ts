import { Controller, UseGuards, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { CharCTableService } from './char-ctable.service';
import { CharCTableDto } from './char-ctable.dto';
import { ICharCTable } from './char-ctable.interface';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Char-ctable')
@Controller('char-ctable')

export class CharCTableController {
  constructor(private readonly charCTableService: CharCTableService) {
  }

  @Get()
/*   @UseGuards(AuthGuard('jwt'))
 */  async find() {
    return this.charCTableService.find();
  }

  @ApiBody({ type: CharCTableDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() charCTableDto: CharCTableDto): Promise<ICharCTable> {
    return this.charCTableService.create(charCTableDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.charCTableService.delete(id);
  }

  @ApiBody({ type: CharCTableDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async save(@Body() charCTableDto: CharCTableDto, @Param('id') id: string): Promise<ICharCTable> {
    return this.charCTableService.save(id, charCTableDto);
 }
}
