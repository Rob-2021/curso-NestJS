import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //ignora los campos que no esten en el dto
    //forbidNonWhitelisted: true, //no permite la entrada de campos que no esten en el dto, alerta
    //transform: true, //transforma los datos a los tipos que se le indique en el dto
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
