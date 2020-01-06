import { ApiProperty } from "@nestjs/swagger";
import { SPELL } from "src/types/types";

export class CreateSpellDto {
    @ApiProperty()
    readonly name: string;
  
    @ApiProperty()
    readonly description: string;
  
    @ApiProperty()
    readonly type: SPELL;
  }