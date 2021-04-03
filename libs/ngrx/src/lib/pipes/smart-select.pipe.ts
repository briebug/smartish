import { Pipe, PipeTransform } from '@angular/core';
import { MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Pipe({
  name: 'smartSelect',
})
export class SmartSelectPipe<TResult, TState> implements PipeTransform {
  constructor(private readonly store: Store<TState>) {}

  transform(selector: MemoizedSelector<TState, TResult>): Observable<TResult> {
    return this.store.select(selector);
  }
}
