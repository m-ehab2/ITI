import { Component } from '@angular/core';
import { UsersArrayService } from '../users-array.service';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent {
  constructor(
    private usersArray: UsersArrayService,
    private route: ActivatedRoute
  ) {}
  user!: { name: string; age: string; email: string };
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Access route parameters
      const id = params.get('id');
      this.user = this.usersArray.users.find((e) => e.name === id);
      console.log(this.user);
    });
  }
}
