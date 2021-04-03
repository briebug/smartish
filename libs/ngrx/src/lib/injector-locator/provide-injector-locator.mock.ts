import { Injector } from '@angular/core';
import { INJECTOR_LOCATOR_TOKEN } from './injector-locator.token';

export function provideMockInjectorLocator() {
  return {
    provide: INJECTOR_LOCATOR_TOKEN,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useFactory: (_injector: Injector) => null,
    deps: [Injector],
  };
}
