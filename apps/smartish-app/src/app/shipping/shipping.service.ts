import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ShippingInvoice } from './+state/shipping-invoice';

@Injectable()
export class ShippingService {
  private apiUrl = `${environment.baseUrl}/shippings`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<ShippingInvoice[]> {
    return this.http.get<ShippingInvoice[]>(`${this.apiUrl}`);
  }

  load(shippingInvoiceId: string): Observable<ShippingInvoice> {
    return this.http.get<ShippingInvoice>(
      `${this.apiUrl}/${shippingInvoiceId}`
    );
  }

  create(shippingInvoice: ShippingInvoice): Observable<ShippingInvoice> {
    return this.http.post<ShippingInvoice>(`${this.apiUrl}`, shippingInvoice);
  }

  update(shippingInvoice: ShippingInvoice): Observable<ShippingInvoice> {
    return this.http.put<ShippingInvoice>(
      `${this.apiUrl}/${shippingInvoice.id}`,
      shippingInvoice
    );
  }

  delete(shippingInvoiceId: string): Observable<ShippingInvoice> {
    return this.http.delete<ShippingInvoice>(
      `${this.apiUrl}/${shippingInvoiceId}`
    );
  }
}
