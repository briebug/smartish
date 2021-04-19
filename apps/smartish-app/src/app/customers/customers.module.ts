import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersStoreModule } from './+state/customers-state.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomersStoreModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    SharedModule,
  ],
})
export class CustomersModule {}
