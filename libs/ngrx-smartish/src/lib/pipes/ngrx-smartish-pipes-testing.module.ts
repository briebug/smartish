import { NgModule } from '@angular/core';
import { MockSmartSelectPipe } from './smart-select.pipe.mock';

@NgModule({
  exports: [MockSmartSelectPipe],
  declarations: [MockSmartSelectPipe],
})
export class NgRxSmartishPipesTestingModule {}
