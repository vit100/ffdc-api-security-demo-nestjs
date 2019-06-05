import { Controller, Get, Req, UseGuards, Injectable } from '@nestjs/common';
import { AccountsService } from '../../bll/accounts/accounts.service';
import { ApiGuard } from '../../core/api.guard';

@Controller('/api/b2c')
@Injectable()
@UseGuards(ApiGuard)
export class B2cController {
  constructor(private accountsService: AccountsService) {}

  @Get('accounts')
  geAccounts(@Req() req) {
    if (!req.user || !req.user.username) {
      return null;
    }
    return this.accountsService.getAccounts(req.user.username);
  }
}
