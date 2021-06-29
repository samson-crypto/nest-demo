import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BlockController } from './block/block.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('health')
  getHello(): string {
    return this.appService.healthCheck();
  }
}

export const allControllers = [
  AppController, BlockController,
];
