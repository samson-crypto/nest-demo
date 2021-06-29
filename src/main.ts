import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as rTrace from 'cls-rtracer';

import { AppModule } from './app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { ExceptionsFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
  });
  // app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new ExceptionsFilter());
  app.use(rTrace.expressMiddleware());
  app.use(loggerMiddleware);

  const options = new DocumentBuilder()
    .setTitle('Chain Explorer API')
    .setDescription('Explore all the favor chains!')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
