import { NestFactory } from '@nestjs/core';
import { DummyMsModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(DummyMsModule);
  await app.listen(3000);
}
bootstrap();
