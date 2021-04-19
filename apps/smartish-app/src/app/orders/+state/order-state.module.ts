import { CommonModule } from '@angular/common';
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
    StoreModule.forFeature(ORDERS_FEATURE, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
  providers: [OrdersService],
})
export class OrdersStoreModule {}
