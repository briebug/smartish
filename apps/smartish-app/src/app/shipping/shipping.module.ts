import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingStateModule } from './+state/shipping-state.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShippingComponent, ShipmentComponent],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    ShippingStateModule,
    SharedModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class ShippingModule {}
