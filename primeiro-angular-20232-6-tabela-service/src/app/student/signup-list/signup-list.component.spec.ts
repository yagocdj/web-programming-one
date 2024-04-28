import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupListComponent } from './signup-list.component';

describe('SignupListComponent', () => {
  let component: SignupListComponent;
  let fixture: ComponentFixture<SignupListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupListComponent]
    });
    fixture = TestBed.createComponent(SignupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
