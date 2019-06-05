import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService, AccountsRepoService],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have method getAccounts', () => {
    expect(service.getAccounts).toBeDefined();
  });

  it('should have method getAccounts with 1 arg', () => {
    expect(service.getAccounts.length).toEqual(1);
  });
});
