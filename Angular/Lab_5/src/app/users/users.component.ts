import { Component, OnInit } from '@angular/core';
import { InputUserService } from '../input-user.service';
import { UsersArrayService } from '../users-array.service';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  columnsToDisplay = ['name', 'age', 'email', 'profile'];
  userData: any;
  users: { name: string; age: string; email: string }[] = [];

  constructor(
    private formDataService: InputUserService,
    private userDataService: UsersArrayService
  ) {}

  ngOnInit() {
    this.userData = this.formDataService.formData;
    console.log('Received form data in Users component:', this.userData);
    this.formDataService.formData = undefined;
    if (this.userData && typeof this.userData === 'object') {
      // Deep clone the userData object before pushing it
      const clonedUserData = { ...this.userData };
      this.userDataService.users.push(clonedUserData);
      console.log(this.userDataService.users);
    }

    // Assign a deep clone of the userDataService.users to this.users
    this.users = this.userDataService.users.map((user) => ({ ...user }));
  }
}
