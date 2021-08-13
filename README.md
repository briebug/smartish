# Smartish

Smartish is a small utility library that makes creating "smartish" components in Angular a breeze. Smartish Components mixed with NgRx, provide a clean and declartive approach to building applications in Angular. 


## Getting Started

You can install the package using `npm install @briebug/smartish-ngrx`

Next you will need to import `SmartishNgRxModule` in `app.module` as well as provide store using the `SMARTISH_STORE_TOKEN`.

```
import { SmartishNgRxModule, SMARTISH_STORE_TOKEN } from '@briebug/smartish-ngrx';
imoprt { StoreModule, Store } from '@ngrx/store';

@NgModule({
  imports: [
      NgRxSmartishModule,
      StoreModule.forRoot({...})
  ],
  providers: [{ provide: SMARTISH_STORE_TOKEN, useClass: Store }]
})
export class AppModule {}
```


## SmartSelect
With SmartishNgRx you can reference NgRx Selectors directly in your Angular Component's template without the need to inject the `store`. You simple need to add the `MemoizedSelector` in your component class and reference that property with the `smartSelector` pipe in your template.

```
import { selectError } from 'YOUR-STORE'

@Component({
    selector: 'app-error',
    template: `<p>{{ selectError | smartSelect | async }}</p>`
})
export class ErrorComponent {
    error = selectError;
}
```

## SmartDispatch

With SmartishNgRx you can dispatch actions directly in your Angular Component's template without the need to dispatch an `@Output() EventEmitter` or injecting the `store`. You simply can use either the `smartDispatch` method.

```
import { smartDispatch } from '@briebug/smartish-ngrx';
import { addTaco } from '...my-actions';

@Component({
    selector: 'app-component',
    template: `<button (click)="addTaco({ taco: form.value })">Add Taco</button>
})
export class MyComponent {
    addTaco = smartDispatch(addTaco);
}
```

## NgRxSmartishComponent

With SmartishNgRx you can reference your NgRx store directly in your Components classes (or templates) without providing the store in the constructor. It's as easy as having your component extends `SmartishNgRxComponent`. 

```
@Component({
    selector: 'app-tacos',
    template: `<app-taco *ngFor="let taco of (tacos$ | async)" [taco]="taco></app-taco>`
})
export class TacosComponent extends SmartishNgRxComponent {
    tacos$ = store.select(selectTacos);
}
```

## Testing
Testing with NgRxSmartish is made simple with the `SmartishNgRxTestingModule`. Just import `SmartishNgRxTestingModule` into your `TestBed` with the `forRoot()` static method. You can also pass an optional `MockStoreConfig` inside of `forRoot()` to save you from having to provide `provideMockStore(...)` in your tests. 

```
const config = { };
describe('YourSmartishComponent', () => {
  beforeEach(async () => {
    imports: [NgRxSmartishTestingModule.forRoot({ initialState: {...}})],
    declarations: [YourSmartishComponent]
  });
});
```