import { Component, Input, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-one-student',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './one-student.component.html',
  styleUrl: './one-student.component.scss',
})
export class OneStudentComponent implements OnInit {
  ngOnInit(): void {}
  @Input() user: any;
}
