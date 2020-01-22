import { ApiProperty } from '@nestjs/swagger';

export class CharactersDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age: number;

    @ApiProperty()
    readonly description: string;

    public createdAt: Date;

    public updatedAt: Date;

}
