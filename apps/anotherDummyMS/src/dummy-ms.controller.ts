import { Controller, Get } from '@nestjs/common';
import { DummyMsService } from './dummy-ms.service';

@Controller()
export class DummyMsController {
  constructor(private readonly dummyMsService: DummyMsService) {}

  @Get()
  getHello(): string {
    return this.dummyMsService.getHello();
  }
}
