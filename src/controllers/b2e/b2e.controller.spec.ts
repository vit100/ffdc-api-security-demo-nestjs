import { Test, TestingModule } from '@nestjs/testing';
import { B2eController } from './b2e.controller';

describe('B2e Controller', () => {
  let controller: B2eController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [B2eController],
    }).compile();

    controller = module.get<B2eController>(B2eController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
