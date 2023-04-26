import { ApiProperty } from "@nestjs/swagger"
import { IsDefined, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"


export class LootDTO{

    @IsNumber()
    @IsOptional()
    id : number

    @IsString()
    @IsOptional()
    @MaxLength(15)
    @MinLength(2)
    @ApiProperty({ example : "Loot"})
    name : string

    @IsString()
    @IsOptional()
    @MaxLength(2)
    @MinLength(1)
    value : number
}