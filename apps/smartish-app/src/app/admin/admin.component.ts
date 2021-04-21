import { Component } from '@angular/core';
import { selectDashboardPreviews } from './selectors';

@Component({
  selector: 'smartish-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  previews$ = selectDashboardPreviews;
}
