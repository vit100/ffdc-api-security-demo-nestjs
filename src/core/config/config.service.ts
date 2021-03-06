import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config();
  }

  public static get port(): string {
    return process.env.PORT;
  }

  public get port(): string {
    return process.env.PORT;
  }

  public get jwks(): string {
    return process.env.JWKS;
  }
}
