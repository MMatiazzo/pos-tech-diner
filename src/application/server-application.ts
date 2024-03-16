import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { RootModule } from "./di/root.module";
import { ValidationPipe } from "@nestjs/common";
import * as session from 'express-session';
import { ClienteController } from "./api/http-rest/controller/cliente.controller";

export class ServerApplication {
  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);
    app.useGlobalPipes(new ValidationPipe());
    await ClienteController.initialPop();
    app.use(
      session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
      }),
    );
    console.log('teste imagem mudou');
    await app.listen(3333);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}