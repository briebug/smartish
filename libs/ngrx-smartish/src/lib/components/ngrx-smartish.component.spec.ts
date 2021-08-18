import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgRxSmartishComponent } from './ngrx-smartish.component';
import { NgRxSmartishTestingModule } from '../ngrx-smartish-testing.module';
import { Component } from '@angular/core';
import { createAction } from '@ngrx/store';

@Component({ template: '' })
class SmartishTestComponent extends NgRxSmartishComponent {}
describe('SmartishNgRxComponent', () => {
  let fixture: ComponentFixture<SmartishTestComponent>;
  let component: SmartishTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartishTestComponent],
      imports: [NgRxSmartishTestingModule.forRoot()],
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
