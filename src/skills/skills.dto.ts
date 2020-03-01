import { ApiProperty } from '@nestjs/swagger';
import { SKILL } from 'src/types/types';
import { IsIn } from 'class-validator';

export class SkillDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  @IsIn(['COMBAT', 'SOCIAL'])
  readonly skillType: SKILL;
}
