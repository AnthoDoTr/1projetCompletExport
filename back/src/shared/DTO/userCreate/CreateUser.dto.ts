import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsDefined, IsString, MaxLength, MinLength, IsOptional } from "class-validator";
import { UserDTO } from "./User.dto";

export class CreateUserDTO{

    @IsString()
    @IsDefined()
    @MaxLength(15)
    @MinLength(2)
    @ApiProperty({ example : "Proco"})
    pseudo : string

    @IsString()
    @IsDefined()
    @MinLength(4)
    @ApiProperty()
    password : string

    @IsNumber()
    // @IsDefined()
    @IsOptional()
    score : number = 0
}