import { Test, TestingModule } from '@nestjs/testing';
import { ConsumersService } from '../../bll/consumers/consumers.service';
import { AccountsService } from '../../bll/accounts/accounts.service';
import { ConsumersRepoService } from '../../data/consumers-repo/consumers-repo.service';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';
import { B2eController } from './b2e.controller';
import { ConfigService } from '../../core/config/config.service';

describe('B2e Controller', () => {
  let controller: B2eController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [B2eController],
      providers: [ConsumersService, AccountsService, ConsumersRepoService, AccountsRepoService, ConfigService],
    }).compile();

    controller = module.get<B2eController>(B2eController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have method getConsumers', () => {
    expect(controller.getConsumers).toBeDefined();
  });

  it('should have method getAccount', () => {
    expect(controller.getAccount).toBeDefined();
  });

  it('should have method getAccount with  1 param', () => {
    expect(controller.getAccount.length).toEqual(1);
  });
});
