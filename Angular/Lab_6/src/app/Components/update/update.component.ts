import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-update',
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
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  constructor(
    private handleData: HandleUsersDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  user: any;
  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.handleData.getUser(userId).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
        this.regValidation.patchValue({
          name: this.user.name,
          age: this.user.age,
          email: this.user.email,
          city: this.user.city,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
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
      this.handleData
        .updateUser(this.route.snapshot.paramMap.get('id'), {
          name: this.regValidation.controls.name.value,
          age: this.regValidation.controls.age.value,
          email: this.regValidation.controls.email.value,
          city: this.regValidation.controls.city.value,
        })
        .subscribe();
      this.router.navigate(['']);
    } else {
      console.log('Invalid Data');
    }
  }
  handleDelete() {
    this.handleData
      .deleteUser(this.route.snapshot.paramMap.get('id'))
      .subscribe();
    this.router.navigate(['']);
  }
}
