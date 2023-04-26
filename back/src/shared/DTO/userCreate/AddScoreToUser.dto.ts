import { OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { IsNumber, IsDefined, IsString, MaxLength, MinLength, IsOptional, IsPassportNumber } from "class-validator";
import { UserDTO } from "./User.dto";

export class addScoreToUserDTO{

    @IsString()
    @IsOptional()
    pseudo : string

    @IsString()
    @IsOptional()
    password: string

    @IsNumber()
    @IsOptional()
    score : number

}