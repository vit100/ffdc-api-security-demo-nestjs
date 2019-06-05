import { Test, TestingModule } from '@nestjs/testing';
import { ConsumersRepoService } from './consumers-repo.service';

describe('ConsumersRepoService', () => {
  let service: ConsumersRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumersRepoService],
    }).compile();

    service = module.get<ConsumersRepoService>(ConsumersRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have method consumers', () => {
    expect(service.consumers).toBeDefined();
  });
});
