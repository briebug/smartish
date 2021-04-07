import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxComponent } from './ngrx.component';
import { SmartishNgRxTestingModule } from '../ngrx-testing.module';
import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';

@Component({ template: '' })
class SmartishTestComponent extends SmartishNgRxComponent {}
describe('SmartishNgRxComponent', () => {
  let fixture: ComponentFixture<SmartishTestComponent>;
  let component: SmartishTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartishTestComponent],
      imports: [SmartishNgRxTestingModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartishTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have reference to store', () => {
    expect(component.store).toBeTruthy();
  });

  it('can dispatch action', () => {
    // arrange
    const action = createAction('TEST');
    spyOn(component.store, 'dispatch');

    // act
    component.store.dispatch(action());

    // assert
    expect(component.store.dispatch).toHaveBeenCalledWith(action());
  });

  it('can call store.select', () => {
    expect(component.store.select).toBeTruthy();
  });
});
