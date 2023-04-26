import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ForbiddenException, HttpException, NotAcceptableException, NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "src/shared/DTO/userCreate/User.dto";
import { UserPseudo } from "src/shared/DTO/userCreate/UserId";
import { CreateUserDTO } from "src/shared/DTO/userCreate/CreateUser.dto";
import { UsersEntity } from "src/shared/entities/users/Users.entity";
import { DeleteResult, Not, Repository, UpdateResult } from "typeorm";
import { UpdateScoreUserDTO } from "src/shared/DTO/userCreate/UpdateScoreUser.dto";
import { LootService } from "src/loot/loot.service";
import { LootDTO } from "src/shared/DTO/loot/Loot.dto";
import { LootName } from "src/shared/DTO/loot/LootId";
import { arrayMaxSize } from "class-validator";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UsersEntity) private userRepo : Repository<UsersEntity>,
        private readonly lootServe : LootService
    ){}

    async getAll() : Promise<[UserDTO[], number]>{
        let allUsers : [UserDTO[], number] = await this.userRepo.findAndCount({
            select : {
                id : true,
                pseudo : true,
                password : false,
                score : true
            }
        })
        .catch((error) => { throw new HttpException("Pas de user", 404)})

        return allUsers
    }

    async getOne(UserPseudo : UserPseudo) : Promise<UserDTO>
    {
        let otherOneUser = await this.userRepo.findOneBy({ pseudo : UserPseudo})

        let oneUser : UserDTO = await this.userRepo.findOne({
            select : {
                id : true,
                pseudo : true,
                password : true,
                score : true,
            },
            where : { pseudo : UserPseudo}
        })

        return oneUser
    }



    async userNew(newUser : CreateUserDTO) : Promise<UsersEntity>
    {

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(newUser.password, salt);


        const user = new UsersEntity();
        user.pseudo = newUser.pseudo;
        // user.password = newUser.password;
        user.password = hashedPassword;
        user.score = newUser.score;
        return this.userRepo.save(user)
    }

    async getRanking() : Promise<UsersEntity[]> {
        return this.userRepo
            .createQueryBuilder('user')
            .orderBy('user.score', 'DESC')
            .getMany()
    }


    async updateScore(userPseudo : UserPseudo, updateScore : UpdateScoreUserDTO) : Promise<UserDTO>
    {

        let userFound : UsersEntity = await this.userRepo.findOneBy({ pseudo : userPseudo})

        if (!userFound) throw new NotFoundException("User not found")

        userFound.score = updateScore.newScore

        let result = await this.userRepo.save(userFound)

        return result
    }



    async addScoreToUser( userPseudo : string) : Promise<{score :number, randomObjects : LootDTO[]}>{

        const user = await this.userRepo.findOneBy( {pseudo : userPseudo});
        const raid = await this.lootServe.raid1();
        const score = user.score + raid.score;
        user.score = score;
        await this.userRepo.save(user)
        // await this.userServe.update(user);
        return {score :raid.score, randomObjects: raid.randomObjects}
 
    }


    async addScoreToUser1( userPseudo : string) : Promise<{score :number, randomObjects : LootDTO[]}>{

        const user = await this.userRepo.findOneBy( {pseudo : userPseudo});
        const raid = await this.lootServe.raid1();
        const score = user.score + raid.score;
        user.score = score;
        await this.userRepo.save(user)

        return {score :raid.score, randomObjects: raid.randomObjects}
 
    }

    // score :number, randomObjects : LootDTO[]
    async addScoreToUser2( userPseudo : string) : Promise<{score :number, randomObjects : LootDTO[]}>{

        const user = await this.userRepo.findOneBy( {pseudo : userPseudo});
        const raid = await this.lootServe.raid2();
        if ( user.score > 149 ) {
        const score = user.score + raid.score - 150;
        user.score = score;
        await this.userRepo.save(user)

        return {score :raid.score, randomObjects: raid.randomObjects}
        } else {
            return {score: user.score, randomObjects: [{
                id : null,
                name : "Pas assez de point pour ce raid : minimum 150 points, votre score ",
                value : null
            }]}
        }
    }


    async addScoreToUser3( userPseudo : string) : Promise<{score :number, randomObjects : LootDTO[]}>{

        const user = await this.userRepo.findOneBy( {pseudo : userPseudo});
        const raid = await this.lootServe.raid3();
        if ( user.score > 899 ) {
            const score = user.score + raid.score - 900;
            user.score = score;
            await this.userRepo.save(user)
    
            return {score :raid.score, randomObjects: raid.randomObjects}
            } else {
                return {score: user.score, randomObjects: [{
                    id : null,
                    name : "Pas assez de point pour ce raid : minimum 900 points, votre score ",
                    value : null
                }]}
            }




        // const score = user.score + raid.score;
        // user.score = score;
        // await this.userRepo.save(user)

        // return {score :raid.score, randomObjects: raid.randomObjects}
 
    }
    async addScoreToUser4( userPseudo : string) : Promise<{score :number, randomObjects : LootDTO[]}>{

        const user = await this.userRepo.findOneBy( {pseudo : userPseudo});
        const raid = await this.lootServe.raid4();
        if ( user.score > 1499 ) {
            const score = user.score + raid.score - 1500;
            user.score = score;
            await this.userRepo.save(user)
    
            return {score :raid.score, randomObjects: raid.randomObjects}
            } else {
                return {score: user.score, randomObjects: [{
                    id : null,
                    name : "Pas assez de point pour ce raid : minimum 1500 points, votre score ",
                    value : null
                }]}
            }




        // const score = user.score + raid.score;
        // user.score = score;
        // await this.userRepo.save(user)

        // return {score :raid.score, randomObjects: raid.randomObjects}
 
    }




}