import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LootEntity } from "src/shared/entities/loot/Loot.entity";
import { LootController } from "./loot.controller";
import { LootService } from "./loot.service";

@Module({

    imports : [
        TypeOrmModule.forFeature([
            LootEntity
        ])
    ],
    controllers : [LootController],
    providers : [LootService]

})
export class LootModule {}