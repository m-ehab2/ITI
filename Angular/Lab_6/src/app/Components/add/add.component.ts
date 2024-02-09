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
import { HandleUsersDataService } from '../../Services/handle-users-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [HandleUsersDataService],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  constructor(
    private formDataService: HandleUsersDataService,
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
    city: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/),
    ]),
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
  get cityValid() {
    return this.regValidation.controls['city'].valid;
  }

  getErrorMessage(s: string) {
    switch (s) {
      case 'name':
        return 'This field is required and it needs to be more than 3 letters and can`t contain a space after a name';
        break;
      case 'age':
        return 'This field is required and it needs to digits and it must be more than 10 and less than 50';
        break;
      case 'email':
        return 'This field is required and it needs to be a valid email';
        break;
      case 'city':
        return 'This field is required and it needs to be more than 3 letters and can`t contain a space after a city name';
        break;

      default:
        break;
    }
    return s;
  }
  handleSubmit() {
    if (this.regValidation.valid) {
      this.formDataService
        .addUser({
          name: this.regValidation.controls.name.value,
          age: this.regValidation.controls.age.value,
          email: this.regValidation.controls.email.value,
          city: this.regValidation.controls.city.value,
        })
        .subscribe();
      console.log('Form data saved:', {
        name: this.regValidation.controls.name.value,
        age: this.regValidation.controls.age.value,
        email: this.regValidation.controls.email.value,
        city: this.regValidation.controls.city.value,
      });
      this.router.navigate(['']);
    } else {
      console.log('Invalid Data');
    }
  }
}
