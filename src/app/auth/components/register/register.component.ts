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
      //it will return true when all the validations are verified including angular (length, reuqired, email) and custom (pasword matching)
      console.log('Success' + this.registerForm.value);
      //this will not be able to print the object, so write the following code
      console.log('Success' + JSON.stringify(this.registerForm.value));
    } else {
      console.log(this.registerForm.errors);
      this.printErrors();
    }
  }
  printErrors() {    
    for (const controlName in this.registerForm.controls) {
      const control = this.registerForm.get(controlName);
      if (control && control.errors) {
        console.log(`Errors in ${controlName}:`, control.errors);
      }
    }
  }
}
