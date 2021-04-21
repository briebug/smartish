import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paginator } from '../../interfaces';

@Component({
  selector: 'smartish-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() paginator: Paginator;
  @Output() page = new EventEmitter();
}
