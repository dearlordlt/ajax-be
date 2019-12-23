import { ApiProperty } from '@nestjs/swagger';
import { SKILL } from 'src/types/types';

export class CreateSkillDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly type: SKILL;
}
