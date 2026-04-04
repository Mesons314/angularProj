import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../utils/passwordValidators';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  private readonly strongPasswordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{13,}$/;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.strongPasswordPattern)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator });
  }

  registerSubmit() {
    if (this.registerForm.valid) {
      console.log('Success' + this.registerForm.value);
      console.log('Success' + JSON.stringify(this.registerForm.value));
    } else {
      console.log(this.registerForm.errors);
      this.printErrors();
    }
  }

  printErrors(): void {
  const controls = this.registerForm.controls;
  Object.keys(controls).forEach((name) => {
    const control = controls[name];
    if (control.invalid && control.touched && control.errors) {
      console.log(`${name} has the following errors:`);
      Object.entries(control.errors).forEach(([key, value]) => {
        console.log(`- ${key}: ${JSON.stringify(value)}`);
      });
    }
  });
}
}
