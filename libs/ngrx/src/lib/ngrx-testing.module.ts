import { Inject, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  MockStore,
  MockStoreConfig,
  provideMockStore,
} from '@ngrx/store/testing';
import { InjectorLocator } from './injector-locator/injector-locator';
import { injectorLocationFactory } from './injector-locator/injector-locator.factory';
import { INJECTOR_LOCATOR_TOKEN } from './injector-locator/injector-locator.token';
import { provideInjectorLocator } from './injector-locator/provide-injector-locator';
import { SmartishNgRxPipesTestingModule } from './pipes/ngrx-pipes-testing.module';
import { SMARTISH_STORE_TOKEN } from './token';

@NgModule({
  exports: [SmartishNgRxPipesTestingModule],
})
export class SmartishNgRxTestingModule {
  constructor(
    @Inject(INJECTOR_LOCATOR_TOKEN) readonly injector: InjectorLocator
  ) {}

  static forRoot<T>(
    config?: MockStoreConfig<T>
  ): ModuleWithProviders<SmartishNgRxTestingModule> {
    return {
      ngModule: SmartishNgRxTestingModule,
      providers: [
        provideMockStore(config),
        provideInjectorLocator(),
        {
          provide: SMARTISH_STORE_TOKEN,
          useExisting: MockStore,
        },
      ],
    };
  }
}
