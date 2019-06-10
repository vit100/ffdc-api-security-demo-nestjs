import { Module } from '@nestjs/common';
import { K8 } from './k8.controller';

@Module({
  controllers: [K8]
})
export class HealthModule {}
