import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber, IsPositive, Max, Min } from "class-validator";

export class UpdateScoreUserDTO{

    @IsDefined()
    @IsNumber()
    @IsPositive()
    newScore : number
}