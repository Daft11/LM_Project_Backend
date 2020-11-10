import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getItemsArray')
  getItemsArray(): any {
    return this.appService.itemsArray();
  }

  @Get('getFramesInfo')
  getframesInfo(): any {
    return this.appService.framesInfo();
  }

  @Post('permutation')
  permutation(
    @Body('length') len: number,
    @Body('sizes') sizes: object
    ): any{
    return this.appService.calc(len, sizes);
  }


}
