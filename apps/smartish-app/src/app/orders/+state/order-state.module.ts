import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OrdersService } from '../orders.service';
import { OrdersEffects } from './effects';
import { ordersReducer, ORDERS_FEATURE } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(ORDERS_FEATURE, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrdersService],
})
export class OrdersStoreModule {}
