import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideInjectorLocator } from './injector-locator/provide-injector-locator';
import { INJECTOR_LOCATOR_TOKEN } from './injector-locator/injector-locator.token';
import { InjectorLocator } from './injector-locator/injector-locator';
import { SmartishNgRxPipesModule } from './pipes/ngrx-pipes.module';

@NgModule({
  imports: [CommonModule, SmartishNgRxPipesModule],
  providers: [provideInjectorLocator()],
  exports: [SmartishNgRxPipesModule],
})
export class SmartishNgRxModule {
  constructor(
    @Inject(INJECTOR_LOCATOR_TOKEN) readonly injector: InjectorLocator
  ) {}
}
