import { IsDefined, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UserDTO {

    @IsNumber()
    @IsDefined()
    id : number

    @IsString()
    @IsDefined()
    @MaxLength(20)
    @MinLength(2)
    pseudo : string

    @IsString()
    @IsDefined()
    password : string


    @IsNumber()
    @IsDefined()
    score : number

}