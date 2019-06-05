import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have static prop port', () => {
    expect(ConfigService.port).toBeDefined();
  });

  it('should have instance prop port', () => {
    expect(service.port).toBeDefined();
  });

  it('should have instance prop jwks', () => {
    expect(service.jwks).toBeDefined();
  });

  it('should have instance prop jwks length > 0', () => {
    expect(service.jwks.length > 0).toBeTruthy();
  });
});
