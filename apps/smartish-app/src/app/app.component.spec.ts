import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgRxSmartishTestingModule } from '@briebug/ngrx-smartish';
import { AvatarComponent } from './admin/menu/avatar/avatar.component';
import { LogoComponent } from './admin/menu/logo/logo.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoaderComponent } from './shared/loader/loader.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        LoaderComponent,
        LogoComponent,
        AvatarComponent,
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NgRxSmartishTestingModule.forRoot({}),
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
