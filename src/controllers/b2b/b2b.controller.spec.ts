import { Test, TestingModule } from '@nestjs/testing';
import { B2bController } from './b2b.controller';

describe('B2b Controller', () => {
  let controller: B2bController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [B2bController],
    }).compile();

    controller = module.get<B2bController>(B2bController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
