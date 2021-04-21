import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Category } from './category';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  loadAll(): Observable<Category[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() category: Category): Observable<Category> {
    return this.service.create(category);
  }

  @Put(':id')
  update(@Body() category: Category): Observable<Category> {
    return this.service.update(category);
  }
}
