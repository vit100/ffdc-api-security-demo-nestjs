import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './core/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ConfigService.port, () => {
    console.info(`Listening on port ${ConfigService.port}`);
  });
}
bootstrap();
