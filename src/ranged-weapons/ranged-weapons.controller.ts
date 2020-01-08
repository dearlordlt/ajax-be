import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { RangedWeaponsService } from './ranged-weapons.service';
import { AuthGuard } from '@nestjs/passport';
import { RangedWeapons } from './ranged-weapons.interface';
import { CreateRangedWeaponsDto } from './ranged-weapons.dto';

@ApiBearerAuth()
@ApiTags('Ranged-weapons')
@Controller('ranged-weapons')
export class RangedWeaponsController {
  constructor(private readonly rangedWeaponsService: RangedWeaponsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<RangedWeapons[]> {
    return this.rangedWeaponsService.findAll();
  }

  @ApiBody({ type: CreateRangedWeaponsDto })
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createRangedWeaponsDto: CreateRangedWeaponsDto): Promise<RangedWeapons> {
    return this.rangedWeaponsService.create(createRangedWeaponsDto);
  }
}
