import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

class testData {}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() testData: testData): string {
    return this.appService.saveDataToMachine(testData);
  }

  @Post('/test')
  SaveData(@Body() testData: testData): string {
    return this.appService.saveData(testData);
  }
}
