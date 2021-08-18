import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
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
  billings$ = selectAllBillings;
  paginator$ = selectBillingPaginator;
  displayedColumns: BillingInvoiceColumnKeys[] = ['id', 'to', 'date', 'amount'];
  updatePagination = smartDispatch(updateBillingPagination);
}
