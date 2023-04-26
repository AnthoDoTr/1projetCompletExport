import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ForbiddenException, HttpException, NotAcceptableException, NotFoundException } from "@nestjs/common/exceptions";
import { InjectRepository } from "@nestjs/typeorm";
import { LootDTO } from "src/shared/DTO/loot/Loot.dto";
import { LootName } from "src/shared/DTO/loot/LootId";
import { LootEntity } from "src/shared/entities/loot/Loot.entity";
import { Not, Repository, UpdateResult } from "typeorm";


@Injectable()
export class LootService {

    constructor(
        @InjectRepository(LootEntity) private lootRepo: Repository<LootEntity>
    ) { }

    async getAll(): Promise<[LootDTO[], number]> {
        let allLoot: [LootDTO[], number] = await this.lootRepo.findAndCount({
            select: {
                id: true,
                name: true,
                value: true
            },
        })
            .catch((error) => { throw new HttpException("Bip", 404) })

        return allLoot
    }


    async getOneLoot(lootName: LootName): Promise<LootDTO> {

        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                id: true,
                name: true,
                value: true
            },
            where: { name: lootName }
        })

        return oneLoot
    }

    async getOneByRandom() {

        const random = Math.floor(Math.random()*8) + 1;
        let search = "";

        switch (random) {
            case 1:
                {
                    search = "Iron"
                    break;
                }
            case 2:
                {
                    search = "Bronze"
                    break;
                }
            case 3:
                {
                    search = "Wool"
                    break;
                }
            case 4:
                {
                    search = "Rhodium"
                    break;
                }
            case 5:
                {
                    search = "Gold"
                    break;
                }
            case 6:
                {
                    search = "Adamantium"
                    break;
                }
            case 7:
                {
                    search = "Plutonium"
                    break;
                }
            case 8:
                {
                    search = "Tritium"
                    break;
                }



        }
        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                name: true,
                value: true
            },
            where: { name: search }
        })

        return oneLoot
    }


    async getOneByRandom1() {
        const random = Math.floor(Math.random()*3) + 1;
        let search = "";

        switch (random) {
            case 1:
                {
                    search = "Iron"
                    break;
                }
            case 2:
                {
                    search = "Bronze"
                    break;
                }
            case 3:
                {
                    search = "Wool"
                    break;
                }
            



        }
        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                name: true,
                value: true
            },
            where: { name: search }
        })

        return oneLoot
    }


    async getOneByRandom2() {
        const random = Math.floor(Math.random()*4) + 1;
        let search = "";

        switch (random) {
            case 1:
                {
                    search = "Iron"
                    break;
                }
            case 2:
                {
                    search = "Bronze"
                    break;
                }
            case 3:
                {
                    search = "Wool"
                    break;
                }
            case 4:
                {
                    search = "Rhodium"
                    break;
                }




        }
        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                name: true,
                value: true
            },
            where: { name: search }
        })

        return oneLoot
    }


    async getOneByRandom3() {
        const random = Math.floor(Math.random()*6) + 1;
        let search = "";

        switch (random) {
            case 1:
                {
                    search = "Iron"
                    break;
                }
            case 2:
                {
                    search = "Bronze"
                    break;
                }
            case 3:
                {
                    search = "Wool"
                    break;
                }
            case 4:
                {
                    search = "Rhodium"
                    break;
                }
            case 5:
                {
                    search = "Gold"
                    break;
                }
            case 6:
                {
                    search = "Adamantium"
                    break;
                }



        }
        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                name: true,
                value: true
            },
            where: { name: search }
        })

        return oneLoot
    }


    async getOneByRandom4() {
        const random = Math.floor(Math.random()*8) + 1;
        let search = "";

        switch (random) {
            case 1:
                {
                    search = "Iron"
                    break;
                }
            case 2:
                {
                    search = "Bronze"
                    break;
                }
            case 3:
                {
                    search = "Wool"
                    break;
                }
            case 4:
                {
                    search = "Rhodium"
                    break;
                }
            case 5:
                {
                    search = "Gold"
                    break;
                }
            case 6:
                {
                    search = "Adamantium"
                    break;
                }
            case 7:
                {
                    search = "Plutonium"
                    break;
                }
            case 8:
                {
                    search = "Tritium"
                    break;
                }



        }
        let oneLoot: LootDTO = await this.lootRepo.findOne({
            select: {
                name: true,
                value: true
            },
            where: { name: search }
        })

        return oneLoot
    }


    async getRandomNumberItem1() {
        const numberOfObjects = Math.floor(Math.random()*3) + 1;
        let selectedObjects = [];

        for (let i = 0; i < numberOfObjects; i++) {
            const randomObject = await this.getOneByRandom1()
            selectedObjects.push(randomObject)
        }


        return selectedObjects


        }

    
    async getRandomNumberItem2() {
        const numberOfObjects = Math.floor(Math.random()*4) + 1;
        let selectedObjects = [];

        for (let i = 0; i < numberOfObjects; i++) {
            const randomObject = await this.getOneByRandom2()
            selectedObjects.push(randomObject)
        }
    
    
        return selectedObjects
    
    
        }


        
    async getRandomNumberItem3() {
        const numberOfObjects = Math.floor(Math.random()*4) + 2;
        let selectedObjects = [];

        for (let i = 0; i < numberOfObjects; i++) {
            const randomObject = await this.getOneByRandom3()
            selectedObjects.push(randomObject)
        }
    
    
           return selectedObjects
        
        
        }

        
    async getRandomNumberItem4() {
        const numberOfObjects = Math.floor(Math.random()*6) + 3;
        let selectedObjects = [];

        for (let i = 0; i < numberOfObjects; i++) {
            const randomObject = await this.getOneByRandom4()
            selectedObjects.push(randomObject)
        }
        
        
        return selectedObjects
        
        
        }


        
        async test(): Promise<{ value: number }> {
            const count = await this.lootRepo.count();
            const randomObject = await this.getOneByRandom1()
            return { value: randomObject.value };
        }


        async test2(): Promise<{ score: number, randomObjects : LootDTO[] }> {
            const randomObjects = [];
            const randomCount= Math.floor(Math.random() * 3) +1;

            for (let i = 0; i < randomCount; i++) {
                const randomObject = await this.getOneByRandom1();
                randomObjects.push(randomObject);
                
            }
            const score = randomObjects.reduce((total, obj) => total + obj.value, 0);


            return { score, randomObjects }
            ;
        }


        async raid1(): Promise<{ score: number, randomObjects : LootDTO[] }> {
            const randomObjects = [];
            const randomCount= Math.floor(Math.random() * 3) +1;

            for (let i = 0; i < randomCount; i++) {
                const randomObject = await this.getOneByRandom1();
                randomObjects.push(randomObject);
                
            }
            const score = randomObjects.reduce((total, obj) => total + obj.value, 0);


            return { score, randomObjects }
            ;
        }
        
        
        async raid2(): Promise<{ score: number, randomObjects : LootDTO[] }> {
            const randomObjects = [];
            const randomCount= Math.floor(Math.random() * 4) +1;

            for (let i = 0; i < randomCount; i++) {
                const randomObject = await this.getOneByRandom2();
                randomObjects.push(randomObject);
                
            }
            const score = randomObjects.reduce((total, obj) => total + obj.value, 0);


            return { score, randomObjects }
            ;
        }


        async raid3(): Promise<{ score: number, randomObjects : LootDTO[] }> {
            const randomObjects = [];
            const randomCount= Math.floor(Math.random() * 4) +2;

            for (let i = 0; i < randomCount; i++) {
                const randomObject = await this.getOneByRandom3();
                randomObjects.push(randomObject);
                
            }
            const score = randomObjects.reduce((total, obj) => total + obj.value, 0);


            return { score, randomObjects }
            ;
        }


        async raid4(): Promise<{ score: number, randomObjects : LootDTO[] }> {
            const randomObjects = [];
            const randomCount= Math.floor(Math.random() * 6) +3;

            for (let i = 0; i < randomCount; i++) {
                const randomObject = await this.getOneByRandom4();
                randomObjects.push(randomObject);
                
            }
            const score = randomObjects.reduce((total, obj) => total + obj.value, 0);


            return { score, randomObjects }
            ;
        }


        
}