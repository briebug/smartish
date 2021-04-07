import { Directive, Inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Directive()
export abstract class SmartAbstract {
  constructor(@Inject(Store) public store: Store) {}
}
