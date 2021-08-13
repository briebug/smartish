import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartishNgRxTestingModule } from '@briebug/smartish-ngrx';
import { MaterialModule } from '../../material/material.module';
import { DashboardPreview } from './dashboard-preview';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardPreviewComponent } from './dashboard-preview.component';

describe('DashboardPreviewComponent', () => {
  let component: DashboardPreviewComponent;
  let fixture: ComponentFixture<DashboardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPreviewComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        SmartishNgRxTestingModule.forRoot({}),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPreviewComponent);
    component = fixture.componentInstance;
    component.preview = {} as DashboardPreview;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
