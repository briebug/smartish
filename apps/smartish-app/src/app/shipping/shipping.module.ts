import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ShippingStateModule } from './+state/shipping-state.module';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingComponent } from './shipping.component';

@NgModule({
  declarations: [ShippingComponent, ShipmentComponent],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    ShippingStateModule,
    SharedModule,
    MaterialModule,
  ],
})
export class ShippingModule {}
