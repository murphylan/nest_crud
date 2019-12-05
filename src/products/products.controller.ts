import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) { }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param() params) {
    console.log('get a single product', params.id);
    return this.productsService.getProducts().filter(p => p.id == params.id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    console.log('create product', product);
    this.productsService.createProduct(product);
  }

  @Put()
  updateProduct(@Body() product: Product) {
    console.log('update product', product);
    this.productsService.updateProduct(product);
  }

  @Delete()
  deleteProduct(@Body() product: Product) {
    console.log('delete product', product.id);
    this.productsService.deleteProduct(product.id);
  }
}
