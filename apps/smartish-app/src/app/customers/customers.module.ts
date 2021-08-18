import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgRxSmartishPipesModule } from '@briebug/ngrx-smartish';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersStoreModule } from './+state/customers-state.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomersStoreModule,
    MaterialModule,
    SharedModule,
    NgRxSmartishPipesModule,
  ],
})
export class CustomersModule {}
