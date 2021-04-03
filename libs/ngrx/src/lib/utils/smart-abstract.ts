import { Inject } from '@angular/core';
import { Store } from '@ngrx/store';

export abstract class SmartAbstract {
  protected constructor(@Inject(Store) public store: Store) {}
}
