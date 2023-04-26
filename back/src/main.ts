import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { repl } from "@nestjs/core"
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
  }))

 

  app.enableCors();


  const configSwagger = new DocumentBuilder()
  .setTitle("Api REST de l'app")
  .setDescription("Permet de gérer l'app")
  .setVersion("0.0.1")
  .addBearerAuth({
    type : "http",
    name : "Bearer",
    bearerFormat : "Bearer",
    in : "Header",
    scheme : "Bearer"
  }, "access_token"
  )
  .build()

  const pageSwagger = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup("api", app, pageSwagger)



  await app.listen(3000);
}
bootstrap();
