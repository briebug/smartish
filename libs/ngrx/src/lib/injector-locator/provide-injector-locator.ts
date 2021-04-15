import { Injector } from '@angular/core';
import { injectorLocationFactory } from './injector-locator.factory';
import { INJECTOR_LOCATOR_TOKEN } from './injector-locator.token';

export function provideInjectorLocator() {
  return {
    provide: INJECTOR_LOCATOR_TOKEN,
    useFactory: injectorLocationFactory,
    deps: [Injector],
  };
}
