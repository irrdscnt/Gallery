import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IResponse } from './response.interface';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getHello(): IResponse {
    return this.appService.getHello();
  }
  @Get('nest')
  helloNest(): string {
    return this.appService.helloNest();
  }
}
