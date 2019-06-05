import { Test, TestingModule } from '@nestjs/testing';
import { B2cController } from './b2c.controller';
import { AccountsService } from '../../bll/accounts/accounts.service';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';

describe('B2c Controller', () => {
  let controller: B2cController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ B2cController],
      providers: [ AccountsRepoService, AccountsService ]
    }).compile();

    controller = module.get<B2cController>(B2cController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
