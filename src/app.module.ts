import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { B2cController } from './controllers/b2c/b2c.controller';
import { B2bController } from './controllers/b2b/b2b.controller';
import { B2eController } from './controllers/b2e/b2e.controller';
import { ConfigService } from './core/config/config.service';

@Module({
  imports: [],
  controllers: [AppController, B2cController, B2bController, B2eController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
