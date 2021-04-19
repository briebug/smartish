import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order } from './+state/order';

@Injectable()
export class OrdersService {
  private apiUrl = `${environment.baseUrl}/orders`;

  constructor(private readonly http: HttpClient) {}

  loadAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }

  load(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${orderId}`);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}`, order);
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${order.id}`, order);
  }

  delete(orderId: string): Observable<Order> {
    return this.http.delete<Order>(`${this.apiUrl}/${orderId}`);
  }
}
