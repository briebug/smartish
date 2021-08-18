import { Component } from '@angular/core';
import { smartDispatch } from '@briebug/ngrx-smartish';
import { updateShippingInvoice } from '../+state/actions';
import { selectShipment } from '../+state/selectors';

@Component({
  selector: 'smartish-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss'],
})
export class ShipmentComponent {
  shipment$ = selectShipment;
  save = smartDispatch(updateShippingInvoice);
}
