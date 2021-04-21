import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SmartishNgRxPipesModule } from '@briebug/smartish-ngrx';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersStoreModule } from './+state/order-state.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderComponent } from './order/order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [OrdersComponent, AddOrderComponent, OrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersStoreModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SmartishNgRxPipesModule,
  ],
})
export class OrdersModule {}
