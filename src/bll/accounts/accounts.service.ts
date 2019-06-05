import { Injectable } from '@nestjs/common';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';

@Injectable()
export class AccountsService {
  constructor(private accountsRepo: AccountsRepoService) {}

  getConsumerAccounts(consumerUsername: any) {
    return this.accountsRepo.accounts(consumerUsername);
  }

  getAccounts(consumerUsername) {
    return this.accountsRepo.accounts(consumerUsername);
  }
}
