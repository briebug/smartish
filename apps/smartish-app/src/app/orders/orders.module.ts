import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderComponent } from './order/order.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { OrdersStoreModule } from './+state/order-state.module';

@NgModule({
  declarations: [OrdersComponent, AddOrderComponent, OrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersStoreModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class OrdersModule {}
