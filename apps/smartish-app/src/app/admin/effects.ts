import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_REQUEST } from '@ngrx/router-store';
import { map } from 'rxjs/operators';
import { getProducts } from '../catalog/+state/product/+state/actions';
import { getCustomers } from '../customers/+state/actions';
import { routeEqualsPath } from '../operators';
import { getOrders } from '../orders/+state/actions';

@Injectable()
export class AdminEffects {
  constructor(private readonly actions$: Actions) {}

  getOrdersWhenRoutedToAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_REQUEST),
      routeEqualsPath('/admin'),
      map(() => getOrders())
    )
  );

  getCustomersWhenRoutedToAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_REQUEST),
      routeEqualsPath('/admin'),
      map(() => getCustomers())
    )
  );

  getProductsWhenRoutedToAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_REQUEST),
      routeEqualsPath('/admin'),
      map(() => getProducts())
    )
  );
}
