import { Test, TestingModule } from '@nestjs/testing';
import { DummyMsController } from './dummy-ms.controller';
import { DummyMsService } from './dummy-ms.service';

describe('DummyMsController', () => {
  let dummyMsController: DummyMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DummyMsController],
      providers: [DummyMsService],
    }).compile();

    dummyMsController = app.get<DummyMsController>(DummyMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(dummyMsController.getHello()).toBe('Hello World!');
    });
  });
});
