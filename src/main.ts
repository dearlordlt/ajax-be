import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Ajax-BE API')
    .setDescription('Nobody cares')
    .setVersion('1.0')
    .addTag('ajax')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:4200'],
    credentials: true,
    exposedHeaders: [
      'Accept',
      'authorization',
      'Content-Type',
      'If-None-Match',
      'SourceType',
    ],
  });
  await app.listen(3000);
}
bootstrap();
