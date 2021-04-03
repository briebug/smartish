import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { smartAction } from '@briebug/smartish-ngrx';
import { addTaco } from './tacos/+state/tacos.actions';
import { selectTacos } from './tacos/+state/tacos.selectors';

@Component({
  selector: 'smartish-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addTaco = smartAction(addTaco);
  selectors = { selectTacos };

  form: FormGroup = new FormGroup({
    shell: new FormControl(),
    meat: new FormControl(),
    toppings: new FormControl(),
  });
}
