import { ApiProperty } from '@nestjs/swagger';
import { SKILL } from 'src/types/types';

export class SkillDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly type: SKILL;
}
