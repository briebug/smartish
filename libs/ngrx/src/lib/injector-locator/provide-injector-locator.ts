import { Injector } from '@angular/core';
import { InjectorLocator } from './injector-locator';
import { injectorLocationFactory } from './injector-locator.factory';

export function provideInjectorLocator() {
  return {
    provide: InjectorLocator,
    useFactory: injectorLocationFactory,
    deps: [Injector],
  };
}
