import path from 'path';
import { Request, Response } from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import yamljs from 'yamljs';

// TO be reviewded this approach.
// Vit

const yamlDoc = yamljs.load(path.join(__dirname, 'swagger.yaml'));

function isRequestForSwagger(req: Request) {
  if (req.url.includes('api') || req.url.includes('status')) {
    return false;
  }
  return true;
}

export function f1(req: Request, res: Response, next) {
  if (!isRequestForSwagger(req)) {
    return next();
  }
  return swaggerUiExpress.serve[0].call(this, req, res, next);
}

export function f2(req: Request, res: Response, next) {
  if (!isRequestForSwagger(req)) {
    return next();
  }
  return swaggerUiExpress.serve[1].call(this, req, res, next);
}

export function f3(req: Request, res: Response, next) {
  if (!isRequestForSwagger(req)) {
    return next();
  }
  return swaggerUiExpress.setup(yamlDoc).call(this, req, res, next);
}
