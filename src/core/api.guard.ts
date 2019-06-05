import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import jsonwebtoken from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';
import { ConfigService } from './config/config.service';

@Injectable()
export class ApiGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  fetchPublicKey(header, cb): void {
    const jwksRsaClient = jwksRsa({
      jwksUri: this.config.jwks,
      cache: true,
      rateLimit: true,
    });
    jwksRsaClient.getSigningKey(header.kid, (err, key) => {
      cb(err, key.rsaPublicKey);
    });
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    return new Promise<boolean>(resolve => {
      if (!req.token) {
        resolve(false);
      }

      jsonwebtoken.verify(req.token, this.fetchPublicKey.bind(this), null, (err, decodedToken) => {
        if (err) {
          console.error(err);
          resolve(false);
          return;
        }
        req.user = decodedToken;
        resolve(true);
      });
    });
  }
}
