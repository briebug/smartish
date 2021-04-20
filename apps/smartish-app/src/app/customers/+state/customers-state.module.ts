import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomersService } from '../customers.service';
import { CUSTOMERS_FEATURE, customersReducer } from './reducer';
import { CustomersEffects } from './effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(CUSTOMERS_FEATURE, customersReducer),
    EffectsModule.forFeature([CustomersEffects]),
  ],
  providers: [CustomersService],
})
export class CustomersStoreModule {}
