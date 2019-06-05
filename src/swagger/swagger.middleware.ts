import { Injectable, NestMiddleware } from '@nestjs/common';
import swaggerUiExpress from 'swagger-ui-express';
import yamljs from 'yamljs';

@Injectable()
export class SwaggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const yamlDoc = yamljs.load('./swagger.yaml');
    swaggerUiExpress.serve()[0](req, res, next);
    swaggerUiExpress.setup(yamlDoc)(req, res, next);
   // next();
  }
}
