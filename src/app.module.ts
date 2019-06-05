import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { B2cController } from './controllers/b2c/b2c.controller';
import { B2bController } from './controllers/b2b/b2b.controller';
import { B2eController } from './controllers/b2e/b2e.controller';
import { ConfigService } from './core/config/config.service';
import { ConsumersService } from './bll/consumers/consumers.service';
import { AccountsService } from './bll/accounts/accounts.service';
import { AccountsRepoService } from './data/accounts-repo/accounts-repo.service';
import { JwtExtractMiddleware } from './core/jwt-extract.middleware';
import { ConsumersRepoService } from './data/consumers-repo/consumers-repo.service';

@Module({
  imports: [],
  controllers: [B2cController, B2bController, B2eController],
  providers: [
    ConfigService,
    ConsumersService,
    AccountsService,
    AccountsRepoService,
    ConsumersRepoService,
    B2eController,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer.apply(JwtExtractMiddleware).forRoutes('/api');
  }
}
