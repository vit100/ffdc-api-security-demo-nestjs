import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { ApiGuard } from '../../core/api.guard';
import { Consumer } from '../../shared/consumer.model';
import { Account } from '../../shared/account.model';
import { ConsumersService } from '../../bll/consumers/consumers.service';
import { AccountsService } from '../../bll/accounts/accounts.service';

@Controller('api/b2e')
@UseGuards(ApiGuard)
export class B2eController {
  constructor(private consumersService: ConsumersService, private accountService: AccountsService) {}

  @Get('consumers')
  getConsumers(): Consumer[] {
    return this.consumersService.getConsumers();
  }

  @Get('accounts/:consumerUsername')
  getAccount(@Param('consumerUsername') consumerUsername): Account[] {
    return this.accountService.getConsumerAccounts(consumerUsername);
  }
}
