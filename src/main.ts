import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './core/config/config.service';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('FFDC API Security')
    .setDescription('FFDC B2C, B2B, B2E APIs implemented in NESTJS.')
    .setVersion('1.0')
    .addTag('FFDC')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  await app.listen(ConfigService.port, () => {
    Logger.log(`Listening on port ${ConfigService.port}`);
  });
}
bootstrap();
