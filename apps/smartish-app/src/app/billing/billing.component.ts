import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Paginator } from '../interfaces';
import {
  BillingInvoice,
  selectAllBillings,
  selectBillingPaginator,
  updateBillingPagination,
} from './+state';

type BillingInvoiceColumnKeys = keyof BillingInvoice;

@Component({
  selector: 'smartish-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  billings$ = this.store.select(selectAllBillings);
  paginator$ = this.store.select(selectBillingPaginator);
  displayedColumns: BillingInvoiceColumnKeys[] = ['id', 'to', 'date', 'amount'];

  constructor(private readonly store: Store) {}

  updatePagination(pagination: Paginator): void {
    this.store.dispatch(updateBillingPagination({ pagination }));
  }
}
