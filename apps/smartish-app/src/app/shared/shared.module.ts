import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoItemFoundComponent } from './no-item-found/no-item-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [NoItemFoundComponent, PaginationComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [NoItemFoundComponent, PaginationComponent],
})
export class SharedModule {}
