import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoading } from 'apps/smartish-app/src/app/selectors';
import { of } from 'rxjs';

@Component({
  selector: 'smartish-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading$ = of(false);

  constructor(private readonly store: Store) {}
}
