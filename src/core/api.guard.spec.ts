import { ApiGuard } from './api.guard';
import { ConfigService } from '../core/config/config.service';

describe('ApiGuard', () => {
  it('should be defined', () => {
    expect(new ApiGuard(new ConfigService())).toBeDefined();
  });
});
