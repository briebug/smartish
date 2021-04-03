import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SmartAbstract } from '../utils/smart-abstract';

@Component({ template: '' })
export abstract class SmartishNgRxComponent extends SmartAbstract {
  constructor(@Inject(Store) public store: Store) {
    super(store);
  }
}
