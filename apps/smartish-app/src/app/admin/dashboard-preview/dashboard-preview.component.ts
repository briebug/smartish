import { Component, Input } from '@angular/core';
import { DashboardPreview } from './dashboard-preview';

@Component({
  selector: 'smartish-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.scss'],
})
export class DashboardPreviewComponent {
  @Input() preview: DashboardPreview;
}
