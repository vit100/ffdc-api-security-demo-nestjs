import { Test, TestingModule } from '@nestjs/testing';
import { ConsumersService } from './consumers.service';
import { ConsumersRepoService } from '../../data/consumers-repo/consumers-repo.service';

describe('ConsumersService', () => {
  let service: ConsumersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumersService, ConsumersRepoService],
    }).compile();

    service = module.get<ConsumersService>(ConsumersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
