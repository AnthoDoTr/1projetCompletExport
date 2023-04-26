import { ArgumentsHost, Body, Catch, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Query, UseGuards, ValidationPipe, Request, Patch, UseInterceptors, ClassSerializerInterceptor} from "@nestjs/common";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ApiBearerAuth, ApiBody, ApiGatewayTimeoutResponse, ApiParam, ApiQuery, ApiResponse } from "@nestjs/swagger/dist";
import { UserDTO } from "src/shared/DTO/userCreate/User.dto";
import { UserPseudo } from "src/shared/DTO/userCreate/UserId";
import { CreateUserDTO } from "src/shared/DTO/userCreate/CreateUser.dto";
import { DeleteResult, UpdateResult } from "typeorm";
import { UserService } from "./user.service";
import { UpdateScoreUserDTO } from "src/shared/DTO/userCreate/UpdateScoreUser.dto";
import { LootService } from "src/loot/loot.service";
import { LootDTO } from "src/shared/DTO/loot/Loot.dto";
import { LootName } from "src/shared/DTO/loot/LootId";
import { addScoreToUserDTO } from "src/shared/DTO/userCreate/AddScoreToUser.dto";
import { AuthGuard } from "src/authentification/auth.guard";



@ApiTags("Gestion des users")
@UseInterceptors(ClassSerializerInterceptor)
@Controller("api/users")
export class UserController{

    constructor(
        private readonly userServe : UserService,
        private readonly lootServe : LootService
    ){}

    @UseGuards(AuthGuard)
    @ApiOperation({ summary : "Get all des users"})
    @ApiResponse({ type : UserDTO})
    @UseGuards(AuthGuard)
    @Get()
    getAll() : Promise<[UserDTO[], number]>
    {
        return this.userServe.getAll()
    }

    @UseGuards(AuthGuard)
    @ApiOperation({ summary : "Get one user par son id"})
    @ApiParam({ required : true, name : "userPseudo", example : "MonUser" })
    @ApiResponse({ type : UserDTO})
    @Get("pseudo")
    async getOne( 
        @Request() request 
    ) : Promise<UserDTO>
    {
        let result = await this.userServe.getOne(request.user.pseudo)


        if(!result) throw new NotFoundException("User not found")
        else return result
    }



    @ApiOperation({ summary : "Création d'un User"})
    @ApiBody({ type : UserDTO})
    @ApiResponse({ type : UserDTO})
    @Post()
    async createUser(@Body() CreateUserDTO : CreateUserDTO) {
        return this.userServe.userNew(CreateUserDTO);
    }

  
    @Get('score/ranking')
    async getRanking() {
        return this.userServe.getRanking();
    };


    @UseGuards(AuthGuard)
    @Patch("raid/:lootName")
    @ApiOperation({ summary : "Modification du score de l'user"})
    @ApiBody({ type : addScoreToUserDTO})
    @ApiResponse({ type : UserDTO})
    @ApiParam({ required : true, name : "userPseudo"})
    addScoreToUser(
        @Request() request,
        @Param("lootName") lootName : LootName
    ) : Promise< {score : number, randomObjects : LootDTO[]}>
    {
        if(lootName == "raid1"){
            let raid = this.userServe.addScoreToUser1(request.user.pseudo)

            return raid
        } else if(lootName == "raid2"){
            let raid = this.userServe.addScoreToUser2(request.user.pseudo)

            return raid
        } else if(lootName == "raid3"){
            let raid = this.userServe.addScoreToUser3(request.user.pseudo)

            return raid
        } else if(lootName == "raid4"){
            let raid = this.userServe.addScoreToUser4(request.user.pseudo)

            return raid
        } 
        else {

         throw new NotFoundException("Raid not found")

        }
    }


}