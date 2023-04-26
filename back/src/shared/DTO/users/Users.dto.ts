import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class UsersDTO{

    @IsDefined()
    @IsNumber()
    id : number

    @IsDefined()
    @IsString()
    @MinLength(6)
    @MaxLength(15)
    pseudo : string

    @IsNumber()
    @IsDefined()
    score : number

}