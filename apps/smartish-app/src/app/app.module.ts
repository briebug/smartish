import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  SMARTISH_STORE_TOKEN,
  SmartishNgRxModule,
} from '@briebug/smartish-ngrx';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { BillingModule } from './billing';
import { CatalogModule } from './catalog';
import { CustomersModule } from './customers';
import { OrdersModule } from './orders/';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SmartishNgRxModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    BillingModule,
    CatalogModule,
    OrdersModule,
    CustomersModule,
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }],
  bootstrap: [AppComponent],
})
export class AppModule {}
