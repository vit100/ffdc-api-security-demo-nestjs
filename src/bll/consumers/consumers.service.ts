import { Injectable } from '@nestjs/common';
import { Consumer } from '../../shared/consumer.model';
import { ConsumersRepoService } from '../../data/consumers-repo/consumers-repo.service';

@Injectable()
export class ConsumersService {
  constructor(private consumersRepoService: ConsumersRepoService) {}

  getConsumers(): Consumer[] {
    return this.consumersRepoService.consumers();
  }
}
