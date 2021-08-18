import { Injector } from '@angular/core';
import { InjectorLocator } from './injector-locator';

export function injectorLocationFactory(injector: Injector): InjectorLocator {
  return new InjectorLocator(injector);
}
