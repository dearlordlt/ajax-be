import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { CharCombatTableService } from './char-combat-table.service';
import { CharCombatTableDto } from './char-combat-table.dto';
import { ICharCombatTable } from './char-combat-table.interface';
import { AuthGuard } from '@nestjs/passport';
import { DeleteResponse } from 'src/types/types';

@ApiBearerAuth()
@ApiTags('Char-ctable')
@Controller('char-ctable')
export class CharCTableController {
  constructor(
    private readonly charCombatTableService: CharCombatTableService,
  ) {}

  @Get()
  /*   @UseGuards(AuthGuard('jwt'))
   */
  async find() {
    return this.charCombatTableService.find();
  }

  @ApiBody({ type: CharCombatTableDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() charCombatTableDto: CharCombatTableDto,
  ): Promise<ICharCombatTable> {
    return this.charCombatTableService.create(charCombatTableDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: string): Promise<DeleteResponse> {
    return this.charCombatTableService.delete(id);
  }

  @ApiBody({ type: CharCombatTableDto })
  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async save(
    @Body() charCombatTableDto: CharCombatTableDto,
    @Param('id') id: string,
  ): Promise<ICharCombatTable> {
    return this.charCombatTableService.save(id, charCombatTableDto);
  }
}
