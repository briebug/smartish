import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createAction } from '@ngrx/store';
import { NgRxSmartishTestingModule } from '../ngrx-smartish-testing.module';
import { SmartAbstract } from './smart-abstract';

@Component({ template: `` })
class SmartAbstractTestingComponent extends SmartAbstract {}

describe('SmartAbstract', () => {
  let fixture: ComponentFixture<SmartAbstractTestingComponent>;
  let component: SmartAbstractTestingComponent;
  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartAbstractTestingComponent],
      imports: [NgRxSmartishTestingModule.forRoot(initialState)],
    });

    fixture = TestBed.createComponent(SmartAbstractTestingComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('makes store excessible in class', () => {
    expect(component.store).toBeTruthy();
  });

  it('can dispatch actions', () => {
    // arrange
    const action = createAction('TEST');
    spyOn(component.store, 'dispatch');

    // act
    component.store.dispatch(action());

    // assert
    expect(component.store.dispatch).toHaveBeenCalledWith(action());
  });
  it('can call store.select', () => {
    // arrange
    expect(component.store.select).toBeTruthy();
  });
});
