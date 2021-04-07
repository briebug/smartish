import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { MockStoreConfig, provideMockStore } from '@ngrx/store/testing';
import { InjectorLocator } from './injector-locator/injector-locator';
import { provideInjectorLocator } from './injector-locator/provide-injector-locator';
import { SmartishNgRxPipesTestingModule } from './pipes/ngrx-pipes-testing.module';

@NgModule({
  exports: [SmartishNgRxPipesTestingModule],
})
export class SmartishNgRxTestingModule {
  constructor(@Inject(InjectorLocator) readonly injector: InjectorLocator) {}

  static forRoot<T>(
    config?: MockStoreConfig<T>
  ): ModuleWithProviders<SmartishNgRxTestingModule> {
    return {
      ngModule: SmartishNgRxTestingModule,
      providers: [provideMockStore(config), provideInjectorLocator()],
    };
  }
}
