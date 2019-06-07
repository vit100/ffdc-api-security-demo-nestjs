import { Injectable } from '@nestjs/common';
import { Consumer } from '../../shared/consumer.model';
import consumersMock from './consumers.json';

@Injectable()
export class ConsumersRepoService {
  consumers(): Consumer[] {
    return consumersMock;
  }
}
