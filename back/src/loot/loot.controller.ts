import { ArgumentsHost, Body, Catch, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Query, UseGuards, ValidationPipe} from "@nestjs/common";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiResponse } from "@nestjs/swagger/dist";
import { LootDTO } from "src/shared/DTO/loot/Loot.dto";
import { LootName } from "src/shared/DTO/loot/LootId";
import { UpdateResult } from "typeorm";
import { LootService } from "./loot.service";


@ApiTags("Gestion des loots")
@Controller("api/loot")
export class LootController{


    constructor(
        private readonly lootServe : LootService
    ){}
    
    // @UseGuards(AuthGuard)
    // @ApiBearerAuth("access_token")
    @ApiOperation({ summary : "Get all des loots" })
    @ApiResponse({ type : LootDTO})
    @Get()
    getAll() : Promise<[LootDTO[], number]>
    {
        return this.lootServe.getAll()
    }

    @ApiOperation({ summary : "Get one loot par son id"})
    @ApiParam({ required : true, name : "lootName"})
    @ApiResponse({ type : LootDTO})
    @Get(":lootName")
    async getOneLoot(
        @Param("lootName") lootName : LootName
    ) : Promise<LootDTO>
    {
        if(lootName == "random1"){
            let result = await this.lootServe.getOneByRandom1()
            return result
        } else if(lootName == "random2"){
            let result = await this.lootServe.getOneByRandom2()
            return result
        } else if(lootName == "random3"){
            let result = await this.lootServe.getOneByRandom3()
            return result
        } else if(lootName == "random4"){
            let result = await this.lootServe.getOneByRandom4()
            return result
        } else if(lootName == "randomobject1"){
            let result : any = await this.lootServe.raid1()
            return result
        } else if(lootName == "randomobject2"){
            let result : any = await this.lootServe.raid2()
            return result
        } else if(lootName == "randomobject3"){
            let result : any = await this.lootServe.raid3()
            return result
        } else if(lootName == "randomobject4"){
            let result : any = await this.lootServe.raid4()
            return result
        } 
        let result = await this.lootServe.getOneLoot(lootName)

        if(!result) throw new NotFoundException("Loot not found")
        else return result
    }
    
    

}