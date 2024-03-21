import { NestFactory } from '@nestjs/core';
import { HttpStatus } from '@nestjs/common';
import { Handler, Context } from 'aws-lambda';
import { AppService } from './app.service';
import { AppModule } from './app.module';

export const handler: Handler = async (event: any, context: Context) => {
  console.log('event: ', event);
  console.log('context: ', context);
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(AppService);
  try {
    const res = await appService.getHello();
    return {
      statusCode: HttpStatus.OK,
      body: res,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};
