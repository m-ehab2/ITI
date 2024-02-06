import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentsComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab_4';
  arr:{ name: string, age: number }[]=[];
  handleInput(e:any){
    this.arr.push(e)
    console.log(this.arr);
  }
}
