import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('_status')
export class K8 {
  @Get('healthz')
  @HttpCode(200)
  getHealth() {
    return 'OK';
  }

  @Get('readyz')
  @HttpCode(200)
  getReadiness() {
    return 'OK';
  }
}
