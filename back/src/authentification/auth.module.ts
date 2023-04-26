import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserService } from 'src/users/user.service';
import { UsersEntity } from 'src/shared/entities/users/Users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LootService } from 'src/loot/loot.service';
import { LootEntity } from 'src/shared/entities/loot/Loot.entity';
import { AuthGuard } from './auth.guard';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/passport/local.strategy';


@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '43200s'},
        }),
        TypeOrmModule.forFeature([
            UsersEntity,
            LootEntity
        ])
    ],
    providers: [AuthService,
    LocalStrategy,
    UserService,
    LootService,
    AuthGuard,],
    controllers: [AuthController],
    exports: [AuthService], 
})
export class AuthModule {}