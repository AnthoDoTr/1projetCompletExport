import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNumberString } from "class-validator";
import { IsString } from "class-validator";

export class UsersPseudoDTO{

    @ApiProperty({ example : "Antho"})
    @IsNumberString()
    id : string
}