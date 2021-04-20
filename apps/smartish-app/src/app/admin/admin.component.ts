import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDashboardPreviews } from '../selectors';

@Component({
  selector: 'smartish-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  previews$ = this.store.select(selectDashboardPreviews);

  constructor(private readonly store: Store) {}
}
