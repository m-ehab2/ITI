import { Component, OnInit } from '@angular/core';
import { HandleUsersDataService } from '../../Services/handle-users-data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OneStudentComponent } from '../one-student/one-student.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  providers: [HandleUsersDataService],
  imports: [
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    OneStudentComponent,
    RouterLink,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  constructor(private UService: HandleUsersDataService) {}
  Users: any;
  ngOnInit() {
    this.UService.getUsers().subscribe({
      next: (data) => {
        this.Users = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
