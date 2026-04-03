import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fix: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fix = TestBed.createComponent(RegisterComponent);
    component = fix.componentInstance;
    fix.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    expect(component.registerForm.valid).toBeFalse();
  });
});
