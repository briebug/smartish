import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Customer } from './+state/customer';

@Injectable()
export class CustomersService {
  private apiUrl = `${environment.baseUrl}/customers`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}`);
  }

  load(customerId: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  }

  delete(customerId: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}/${customerId}`);
  }
}
