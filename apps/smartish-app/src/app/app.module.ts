import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SmartishNgRxModule,
  SMARTISH_STORE_TOKEN,
} from '@briebug/smartish-ngrx';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardPreviewComponent } from './admin/dashboard-preview/dashboard-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent, AdminComponent, DashboardPreviewComponent],
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
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }],
  bootstrap: [AppComponent],
})
export class AppModule {}
