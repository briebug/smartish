import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { ShippingInvoice } from './shipping-invoice';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShippingService {
  constructor(
    @InjectRepository(ShippingInvoice)
    private readonly repo: Repository<ShippingInvoice>
  ) {}

  loadAll(): Observable<ShippingInvoice[]> {
    return from(this.repo.find());
  }

  load(id: number): Observable<ShippingInvoice> {
    return from(this.repo.findOne(id));
  }

  create(invoice: ShippingInvoice): Observable<ShippingInvoice> {
    return from(this.repo.save(invoice));
  }

  update(invoice: ShippingInvoice): Observable<ShippingInvoice> {
    return from(this.create(invoice));
  }

  delete(id: number): Observable<ShippingInvoice> {
    return from(
      this.load(id).pipe(tap((invoice) => this.repo.remove(invoice)))
    );
  }
}
