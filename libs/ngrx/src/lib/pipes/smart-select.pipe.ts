import { Inject, Pipe, PipeTransform } from '@angular/core';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SMARTISH_STORE_TOKEN } from '../token';

@Pipe({
  name: 'smartSelect',
})
export class SmartSelectPipe<TState = object> implements PipeTransform {
  constructor(
    @Inject(SMARTISH_STORE_TOKEN) private readonly store: Store<TState>
  ) {}

  transform<TResult>(
    selector: MemoizedSelector<TState, TResult>
  ): Observable<TResult> {
    return this.store.select(selector);
  }
}
