import { ModuleWithProviders, NgModule } from '@angular/core';
import { MockStoreConfig, provideMockStore } from '@ngrx/store/testing';
import { provideMockInjectorLocator } from './injector-locator/provide-injector-locator.mock';

@NgModule({
  declarations: [],
  providers: [],
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
