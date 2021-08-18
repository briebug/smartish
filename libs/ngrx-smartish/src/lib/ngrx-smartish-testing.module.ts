import { Inject, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  MockStore,
  MockStoreConfig,
  provideMockStore,
} from '@ngrx/store/testing';
import { InjectorLocator } from './injector-locator/injector-locator';
import { INJECTOR_LOCATOR_TOKEN } from './injector-locator/injector-locator.token';
import { provideInjectorLocator } from './injector-locator/provide-injector-locator';
import { NgRxSmartishModule } from './ngrx-smartish.module';
import { NgRxSmartishPipesTestingModule } from './pipes/ngrx-smartish-pipes-testing.module';
import { SMARTISH_STORE_TOKEN } from './token';

@NgModule({
  imports: [],
  exports: [NgRxSmartishPipesTestingModule, NgRxSmartishModule],
})
export class NgRxSmartishTestingModule {
  constructor(
    @Inject(INJECTOR_LOCATOR_TOKEN) readonly injector: InjectorLocator
  ) {}

  static forRoot<T>(
    config?: MockStoreConfig<T>
  ): ModuleWithProviders<NgRxSmartishTestingModule> {
    return {
      ngModule: NgRxSmartishTestingModule,
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
