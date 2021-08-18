import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { selectBill, updateBillingInvoice } from '../+state';

@Component({
  selector: 'smartish-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  bill$ = selectBill;
  save = smartDispatch(updateBillingInvoice);
}
