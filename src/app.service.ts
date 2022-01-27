import { Injectable } from '@nestjs/common';
import { IResponse } from './response.interface';

@Injectable()
export class AppService {
  getHello(): IResponse {
    return {
      status: 200,
      message: 'Hello World!',
    };
  }
  helloNest(): string {
    return 'hello nest js';
  }
}
