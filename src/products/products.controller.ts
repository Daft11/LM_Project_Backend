import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpadateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('permutation')
  permutation(@Body('length') len: number, @Body('sizes') sizes: object): any {
    return this.productsService.calc(len, sizes);
  }

  @Get('getItemsArray')
  //@Redirect('URL', 301)
  getItemsArray(): any {
    return this.productsService.itemsArray();
  }

  @Get('getFramesInfo')
  getframesInfo(): any {
    return this.productsService.framesInfo();
  }

  @Put(':lmCode')
  update(
    @Body() updaeProductsDto: UpadateProductDto,
    @Param('lmCode') lmCode: number,
  ) {
    return 'Update' + lmCode;
  }
}
