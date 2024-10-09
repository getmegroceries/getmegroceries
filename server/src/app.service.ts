import { Injectable } from '@nestjs/common';
import { HelloResponse } from './app.controller';

@Injectable()
export class AppService {
  getHello(): HelloResponse {
    return { msg: 'Hello World! And you too Donnie! And you too Ben' };
  }
}
