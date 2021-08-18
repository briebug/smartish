import { Directive, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SMARTISH_STORE_TOKEN } from '../token';

@Directive()
export abstract class SmartAbstract {
  constructor(@Inject(SMARTISH_STORE_TOKEN) public store: Store) {}
}
