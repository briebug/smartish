import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/smartish-app/src/environments/environment';
import { BillingInvoice } from './+state/billing-invoice';

@Injectable()
export class BillingService {
  private apiUrl = `${environment.baseUrl}/billings`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<BillingInvoice[]> {
    return this.http.get<BillingInvoice[]>(`${this.apiUrl}`);
  }

  load(billingInvoiceId: string): Observable<BillingInvoice> {
    return this.http.get<BillingInvoice>(`${this.apiUrl}/${billingInvoiceId}`);
  }

  create(billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.http.post<BillingInvoice>(`${this.apiUrl}`, billingInvoice);
  }

  update(billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.http.put<BillingInvoice>(
      `${this.apiUrl}/${billingInvoice.id}`,
      billingInvoice
    );
  }

  delete(billingInvoiceId: string): Observable<BillingInvoice> {
    return this.http.delete<BillingInvoice>(
      `${this.apiUrl}/${billingInvoiceId}`
    );
  }
}
