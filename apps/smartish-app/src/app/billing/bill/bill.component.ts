import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BillingInvoice, selectBill, updateBillingInvoice } from '../+state';

@Component({
  selector: 'smartish-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  bill$ = this.store.select(selectBill);

  constructor(private readonly store: Store) {}

  save(invoice: BillingInvoice) {
    this.store.dispatch(updateBillingInvoice({ invoice }));
  }
}
