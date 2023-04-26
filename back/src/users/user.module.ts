import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "src/shared/entities/users/Users.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { LootController } from "src/loot/loot.controller";
import { LootService } from "src/loot/loot.service";
import { LootEntity } from "src/shared/entities/loot/Loot.entity";

@Module({
    imports : [
        TypeOrmModule.forFeature([
            UsersEntity,
            LootEntity
        ])
    ],
    controllers : [UserController, LootController],
    providers : [UserService, LootService]
})
export class UserModule {}