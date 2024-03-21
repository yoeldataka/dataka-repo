import { Injectable } from '@nestjs/common';

@Injectable()
export class DummyMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
