import path from 'path';
import { Request, Response } from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import yamljs from 'yamljs';

// TO be reviewded this approach.
// Vit

const yamlDoc = yamljs.load(path.join(__dirname, 'swagger.yaml'));

export function f1(req: Request, res: Response, next) {
  if (req.url.includes('api')) {
    return next();
  }
  req.url = req.originalUrl;
  return swaggerUiExpress.serve[0].call(this, req, res, next);
}

export function f2(req: Request, res: Response, next) {
  if (req.url.includes('api')) {
    return next();
  }
  req.url = req.originalUrl;
  return swaggerUiExpress.serve[1].call(this, req, res, next);
}

export function f3(req: Request, res: Response, next) {
  if (req.url.includes('api')) {
    return next();
  }
  req.url = req.originalUrl;
  return swaggerUiExpress.setup(yamlDoc).call(this, req, res, next);
}
