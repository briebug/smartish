import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockStoreConfig, provideMockStore } from '@ngrx/store/testing';
import { provideMockInjectorLocator } from './injector-locator/provide-injector-locator.mock';
import { SmartishNgRxPipesTestingModule } from './pipes/ngrx-pipes-testing.module';

@NgModule({
  exports: [SmartishNgRxPipesTestingModule],
})
export class SmartishNgRxTestingModule {
  static forRoot<T>(
    config?: MockStoreConfig<T>
  ): ModuleWithProviders<SmartishNgRxTestingModule> {
    return {
      ngModule: SmartishNgRxTestingModule,
      providers: [provideMockStore(config), provideMockInjectorLocator()],
    };
  }
}
