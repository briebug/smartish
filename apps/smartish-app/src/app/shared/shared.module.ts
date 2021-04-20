import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AvatarComponent } from './avatar/avatar.component';
import { LoaderComponent } from './loader/loader.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { NoItemFoundComponent } from './no-item-found/no-item-found.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    NoItemFoundComponent,
    PaginationComponent,
    MenuComponent,
    LogoComponent,
    AvatarComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NoItemFoundComponent,
    PaginationComponent,
    MenuComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
