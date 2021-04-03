import { Component } from '@angular/core';
import { SmartishNgRxComponent } from '@briebug/smartish-ngrx';
import { selectTacos } from './+state/tacos.selectors';
import { tacoAction } from './+state/tacos.actions';

@Component({
  selector: 'smartish-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss'],
})
export class TacosComponent extends SmartishNgRxComponent {
  tacos$ = this.store.select(selectTacos);
  selectors = { selectTacos };
  actions = { tacoAction: tacoAction };
}
