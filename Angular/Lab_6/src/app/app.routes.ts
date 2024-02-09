import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { ErrorComponent } from './error/error.component';
import { AddComponent } from './Components/add/add.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UpdateComponent } from './Components/update/update.component';

export const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'add', component: AddComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: '**', component: ErrorComponent },
];
