import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShippingComponent } from './shipping.component';
import { ShipmentComponent } from './shipment/shipment.component';

const routes: Routes = [
  {
    path: '',
    component: ShippingComponent,
  },
  {
    path: ':shippingId',
    component: ShipmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingRoutingModule {}
