import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SmartishNgRxModule,
  SMARTISH_STORE_TOKEN,
} from '@briebug/smartish-ngrx';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SmartishNgRxModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    SharedModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }],
  bootstrap: [AppComponent],
})
export class AppModule {}
