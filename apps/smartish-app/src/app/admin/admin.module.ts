import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CatalogStateModule } from '../catalog';
import { CustomersStoreModule } from '../customers/+state/customers-state.module';
import { AdminEffects } from './effects';
import { MaterialModule } from '../material/material.module';
import { OrdersStoreModule } from '../orders/+state/order-state.module';
import { AdminComponent } from './admin.component';
import { DashboardPreviewComponent } from './dashboard-preview/dashboard-preview.component';
import { AvatarComponent } from './menu/avatar/avatar.component';
import { LogoComponent } from './menu/logo/logo.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardPreviewComponent,
    MenuComponent,
    LogoComponent,
    AvatarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    OrdersStoreModule,
    CustomersStoreModule,
    CatalogStateModule,
    EffectsModule.forFeature([AdminEffects]),
  ],
  exports: [MenuComponent],
})
export class AdminModule {}
