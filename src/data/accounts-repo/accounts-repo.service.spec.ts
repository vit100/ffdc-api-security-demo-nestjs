import { Test, TestingModule } from '@nestjs/testing';
import { AccountsRepoService } from './accounts-repo.service';

describe('AccountsRepoService', () => {
  let service: AccountsRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsRepoService],
    }).compile();

    service = module.get<AccountsRepoService>(AccountsRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be have method accounts', () => {
    expect(service.accounts).toBeDefined();
  });

  it('should be have method accounts with 1 arg', () => {
    expect(service.accounts.length).toEqual(1);
  });

  it('should invocation of accounts return array', () => {
    expect(Array.isArray(service.accounts('someAccountName'))).toBeTruthy();
  });
});
