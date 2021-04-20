import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Product } from './product';
import { tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) readonly repo: Repository<Product>) {}

  loadAll(): Observable<Product[]> {
    return from(this.repo.find());
  }

  load(id: string): Observable<Product> {
    return from(this.repo.findOne(id));
  }

  create(product: Product): Observable<Product> {
    return from(this.repo.save(product));
  }

  update(product: Product): Observable<Product> {
    return from(this.create(product));
  }

  delete(id: string): Observable<Product> {
    return from(
      this.load(id).pipe(tap((product) => this.repo.remove(product)))
    );
  }
}
