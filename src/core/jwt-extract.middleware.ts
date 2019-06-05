import { Injectable, NestMiddleware } from '@nestjs/common';

import expressBearerToken from 'express-bearer-token';

@Injectable()
export class JwtExtractMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const bearerToken = expressBearerToken();
    bearerToken(req, res, next);
  }
}
