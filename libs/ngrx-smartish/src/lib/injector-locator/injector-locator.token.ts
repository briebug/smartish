import { InjectionToken } from '@angular/core';
import { InjectorLocator } from './injector-locator';

export const INJECTOR_LOCATOR_TOKEN = new InjectionToken<InjectorLocator>(
  'injector-locator'
);
