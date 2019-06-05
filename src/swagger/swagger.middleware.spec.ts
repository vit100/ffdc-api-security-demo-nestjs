import { SwaggerMiddleware } from './swagger.middleware';

describe('SwaggerMiddleware', () => {
  it('should be defined', () => {
    expect(new SwaggerMiddleware()).toBeDefined();
  });
});
