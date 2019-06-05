import { Injectable } from '@nestjs/common';

import { Account } from '../../shared/account.model';
import mockData from './accounts.json';

@Injectable()
export class AccountsRepoService {
  accounts(consumerUsername): Account[] {
    return mockData.filter(a => a.consumerUserName === consumerUsername);
  }
}
