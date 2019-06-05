import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { ApiGuard } from '../../core/api.guard';
import { Consumer } from '../../shared/consumer.model';
import { Account } from '../../shared/account.model';
import { B2eController } from '../b2e/b2e.controller';

@UseGuards(ApiGuard)
@Controller('api/b2b')
export class B2bController {
  constructor(private b2eController: B2eController) {}

  @Get('consumers')
  getConsumers(): Consumer[] {
    return this.b2eController.getConsumers();
  }

  @Get('accounts/:consumerUsername')
  getAccount(@Param('consumerUsername') consumerUsername): Account[] {
    return this.b2eController.getAccount(consumerUsername);
  }
}
