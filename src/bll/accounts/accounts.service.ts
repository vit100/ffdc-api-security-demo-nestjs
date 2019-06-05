import { Injectable } from '@nestjs/common';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';

@Injectable()
export class AccountsService {
  constructor(private accountsRepo: AccountsRepoService) {}

  getAccounts(consumerUserName) {
    return this.accountsRepo.accounts(consumerUserName);
  }
}
