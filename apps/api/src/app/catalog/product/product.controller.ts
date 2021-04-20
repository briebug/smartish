import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  loadAll(): Observable<Product[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() product: Product): Observable<Product> {
    return this.service.create(product);
  }

  @Put(':id')
  update(@Body() product: Product): Observable<Product> {
    return this.service.update(product);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<Product> {
    return this.service.delete(id);
  }
}
