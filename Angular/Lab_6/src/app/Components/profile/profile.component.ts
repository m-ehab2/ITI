import { Component, OnInit } from '@angular/core';
import { HandleUsersDataService } from '../../Services/handle-users-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  providers: [HandleUsersDataService],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user: any; // Define a property to store the retrieved user

  constructor(
    private route: ActivatedRoute,
    private handleData: HandleUsersDataService
  ) {}

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    const userId = this.route.snapshot.paramMap.get('id');

    this.handleData.getUser(userId).subscribe({
      next: (data) => {
        console.log(data);
        this.user = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
