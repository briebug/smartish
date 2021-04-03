import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SmartishNgRxModule } from '@briebug/smartish-ngrx';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { TacosModule } from './tacos/tacos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SmartishNgRxModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    TacosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
