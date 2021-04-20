import { Invoice } from 'apps/smartish-app/src/app/interfaces';

export type ShippingStatus = 'Shipped' | 'Not Shipped';

export interface ShippingInvoice extends Invoice {
  status: ShippingStatus;
}
