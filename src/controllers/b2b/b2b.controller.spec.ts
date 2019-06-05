import { Test, TestingModule } from '@nestjs/testing';
import { B2bController } from './b2b.controller';
import { B2eController } from '../b2e/b2e.controller';
import { ConfigService } from '../../core/config/config.service';
import { ConsumersRepoService } from '../../data/consumers-repo/consumers-repo.service';
import { AccountsRepoService } from '../../data/accounts-repo/accounts-repo.service';
import { ConsumersService } from '../../bll/consumers/consumers.service';
import { AccountsService } from '../../bll/accounts/accounts.service';

describe('B2b Controller', () => {
  let controller: B2bController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [B2bController],
      providers: [B2eController, ConsumersService, AccountsService, ConsumersRepoService, AccountsRepoService, ConfigService],
    }).compile();

    controller = module.get<B2bController>(B2bController);
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

  it('should have method getAccount with 1 param', () => {
    expect(controller.getAccount.length).toEqual(1);
  });
});
