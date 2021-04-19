import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import {
  extractVerifiedParameter,
  routeEqualsPath,
  routeIncludesPath,
} from 'apps/smartish-app/src/app/operators';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map } from 'rxjs/operators';
import {
  getCustomers,
  getCustomersFailed,
  getCustomersSuccess,
  setSelectedCustomerId,
  updateCustomer,
  updateCustomerFailed,
  updateCustomerSuccess,
} from './actions';
import { CustomersService } from '../customers.service';

@Injectable()
export class CustomersEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly customersService: CustomersService
  ) {}

  getCustomersWhenRoutedToCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeEqualsPath('/customers'),
      map(() => getCustomers())
    )
  );

  getAllCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCustomers),
      exhaustMap(() =>
        this.customersService.loadAll().pipe(
          map((customers) => getCustomersSuccess({ customers })),
          catchError((error) => of(getCustomersFailed({ error })))
        )
      )
    )
  );

  setSelectedCustomerFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/customers'),
      extractVerifiedParameter('customerId'),
      map((selectedId) => setSelectedCustomerId({ selectedId }))
    )
  );

  customerPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCustomer),
      map((action) => action.customer),
      exhaustMap((customer) =>
        this.customersService.update(customer).pipe(
          map((customer) => updateCustomerSuccess({ customer })),
          catchError((error) => of(updateCustomerFailed({ error })))
        )
      )
    )
  );
}
