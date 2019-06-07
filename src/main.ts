import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './core/config/config.service';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // At this moment static swagger.yaml file is served from root url.
  // Nestjs approach is to dynamically generate swagger.
  // It is as alternative solution
  //
  // const options = new DocumentBuilder()
  //   .setTitle('FFDC API Security')
  //   .setDescription('FFDC B2C, B2B, B2E APIs implemented in NESTJS.')
  //   .setVersion('1.0')
  //   .addTag('FFDC')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('/', app, document);

  if (!ConfigService.port) {
    Logger.log('Environment var PORT is not set. Exiting.');
    return;
  }
  await app.listen(ConfigService.port, () => {
    Logger.log(`Listening on port ${ConfigService.port}`);
  });
}
bootstrap();
