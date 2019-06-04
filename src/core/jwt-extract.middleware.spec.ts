import { JwtExtractMiddleware } from './jwt-extract.middleware';

describe('JwtExtractMiddleware', () => {
  it('should be defined', () => {
    expect(new JwtExtractMiddleware()).toBeDefined();
  });
});
