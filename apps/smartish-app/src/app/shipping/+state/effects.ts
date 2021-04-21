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
  getShippingInvoices,
  getShippingInvoicesFailed,
  getShippingInvoicesSuccess,
  setSelectedShippingInvoiceId,
  updateShippingInvoice,
  updateShippingInvoiceFailed,
  updateShippingInvoiceSuccess,
} from './actions';
import { ShippingService } from '../shipping.service';

@Injectable()
export class ShippingEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly shippingService: ShippingService
  ) {}

  getShippingInvoicesWhenRoutedToShipping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeEqualsPath('/shipping'),
      map(() => getShippingInvoices())
    )
  );

  getAllShippingInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getShippingInvoices),
      exhaustMap(() =>
        this.shippingService.loadAll().pipe(
          map((shipping) => getShippingInvoicesSuccess({ shipping })),
          catchError((error) => of(getShippingInvoicesFailed({ error })))
        )
      )
    )
  );

  setSelectedShippingInvoiceFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/shipping'),
      extractVerifiedParameter('shippingId'),
      map((selectedId) => setSelectedShippingInvoiceId({ selectedId }))
    )
  );

  shippingPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateShippingInvoice),
      map((action) => action.invoice),
      exhaustMap((invoice) =>
        this.shippingService.update(invoice).pipe(
          map((invoice) => updateShippingInvoiceSuccess({ invoice })),
          catchError((error) => of(updateShippingInvoiceFailed({ error })))
        )
      )
    )
  );
}
