import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  extractVerifiedParameter,
  routeEqualsPath,
  routeIncludesPath,
} from 'apps/smartish-app/src/app/operators';
import { BillingService } from '../billing.service';
import {
  getBillingInvoices,
  getBillingInvoicesFailed,
  getBillingInvoicesSuccess,
  setSelectedBillingInvoiceId,
  updateBillingInvoice,
  updateBillingInvoiceFailed,
  updateBillingInvoiceSuccess,
} from './actions';

@Injectable()
export class BillingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly billingService: BillingService
  ) {}

  getBillingInvoicesWhenRoutedToBilling$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeEqualsPath('/billing'),
      map(() => getBillingInvoices())
    )
  );

  getAllBillingInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBillingInvoices),
      exhaustMap(() =>
        this.billingService.loadAll().pipe(
          map((billings) => getBillingInvoicesSuccess({ billings })),
          catchError((error) => of(getBillingInvoicesFailed({ error })))
        )
      )
    )
  );

  setSelectedBillingInvoiceFromRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      routeIncludesPath('/billing'),
      extractVerifiedParameter('billingId'),
      map((selectedId) => setSelectedBillingInvoiceId({ selectedId }))
    )
  );

  billingPageSaveButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBillingInvoice),
      map((action) => action.invoice),
      exhaustMap((invoice) =>
        this.billingService.update(invoice).pipe(
          map((invoice) => updateBillingInvoiceSuccess({ invoice })),
          catchError((error) => of(updateBillingInvoiceFailed({ error })))
        )
      )
    )
  );
}
