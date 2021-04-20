import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Category } from './category';
import { tap } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) readonly repo: Repository<Category>
  ) {}

  loadAll(): Observable<Category[]> {
    return from(this.repo.find());
  }

  load(id: number): Observable<Category> {
    return from(this.repo.findOne(id));
  }

  create(category: Category): Observable<Category> {
    return from(this.repo.save(category));
  }

  update(category: Category): Observable<Category> {
    return from(this.create(category));
  }

  delete(id: number): Observable<Category> {
    return from(
      this.load(id).pipe(tap((category) => this.repo.remove(category)))
    );
  }
}
