import { Module } from '@nestjs/common';
import { RequestMethod } from '@nestjs/common/enums';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckUserMiddleware } from './shared/middlewares/checkUser.middleware';
import { UserModule } from './users/user.module';
import { UsersEntity } from './shared/entities/users/Users.entity';
import { LootModule } from './loot/loot.module';
import { CorsMiddleware } from './shared/middlewares/Corse.middleware';
import { AuthModule } from './authentification/auth.module';
import { WeatherModule } from './WeatherApi/weather.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : "postgres",
      host : "localhost",
      port : 5432,
      username : "postgres",
      password : "zelda991",
      database : "projetv2",
      entities : [__dirname + '/**/*.entity.{ts, js}'],
      autoLoadEntities : true,
      synchronize : true,
    }),
    TypeOrmModule.forFeature([
      UsersEntity
    ]),
    AuthModule,
    UserModule,
    LootModule,
    WeatherModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    {
      consumer.apply(CheckUserMiddleware, CorsMiddleware)
        .forRoutes(
          { path : "api/users/:userPseudo", method : RequestMethod.POST },
          { path : "api/users/:userId/:score", method : RequestMethod.PUT }
        ),
      consumer.apply(CorsMiddleware).forRoutes('*');
      
    }
  }
}
