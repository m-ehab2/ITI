import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { InputUserService } from '../input-user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private formDataService: InputUserService,
    private router: Router
  ) {}

  regValidation = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/),
    ]),
    age: new FormControl(null, [
      Validators.min(10),
      Validators.max(50),
      Validators.required,
      Validators.pattern(/^[0-9]/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  get NameValid() {
    return this.regValidation.controls['name'].valid;
  }
  get ageValid() {
    return this.regValidation.controls['age'].valid;
  }
  get emailValid() {
    return this.regValidation.controls['email'].valid;
  }

  handleSubmit() {
    if (this.regValidation.valid) {
      this.formDataService.formData = {
        name: this.regValidation.controls.name.value,
        age: this.regValidation.controls.age.value,
        email: this.regValidation.controls.email.value,
      };
      console.log('Form data saved:', this.formDataService.formData);
      this.router.navigate(['/users']);
    } else {
      console.log('Invalid Data');
    }
  }
  getErrorMessage(s: string) {
    switch (s) {
      case 'name':
        return 'This field is required and it needs to be more than 3 letters and can`t container a space after a name';
        break;
      case 'age':
        return 'This field is required and it needs to digits and it must be more than 10 and less than 50';
        break;
      case 'email':
        return 'This field is required and it needs to be a valid email';
        break;

      default:
        break;
    }
    return s;
  }
}
