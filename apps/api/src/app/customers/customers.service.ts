import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Customer } from './customer';
import { tap } from 'rxjs/operators';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer) readonly repo: Repository<Customer>
  ) {}

  loadAll(): Observable<Customer[]> {
    return from(this.repo.find());
  }

  load(id: number): Observable<Customer> {
    return from(this.repo.findOne(id));
  }

  create(customer: Customer): Observable<Customer> {
    return from(this.repo.save(customer));
  }

  update(customer: Customer): Observable<Customer> {
    return from(this.create(customer));
  }

  delete(id: number): Observable<Customer> {
    return from(
      this.load(id).pipe(tap((customer) => this.repo.remove(customer)))
    );
  }
}
