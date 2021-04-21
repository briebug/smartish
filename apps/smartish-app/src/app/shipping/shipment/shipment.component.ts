import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateShippingInvoice } from '../+state/actions';
import { selectShipment } from '../+state/selectors';
import { ShippingInvoice } from '../+state/shipping-invoice';

@Component({
  selector: 'smartish-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent {
  shipment$ = this.store.select(selectShipment);

  constructor(private readonly store: Store) {}

  save(invoice: ShippingInvoice): void {
    this.store.dispatch(updateShippingInvoice({ invoice }));
  }
}
