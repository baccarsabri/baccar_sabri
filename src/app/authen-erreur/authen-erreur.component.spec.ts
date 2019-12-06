import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenErreurComponent } from './authen-erreur.component';

describe('AuthenErreurComponent', () => {
  let component: AuthenErreurComponent;
  let fixture: ComponentFixture<AuthenErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
