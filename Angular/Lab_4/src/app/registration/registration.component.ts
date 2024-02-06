import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
name:string='';
age:number=0;
@Output() regData= new EventEmitter()
handleSubmit(e:any){
  console.log(this.name,this.age);
  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const ageConditional=this.age<=20&&this.age
  if (nameRegex.test(this.name)&&ageConditional) {
    console.log('Name is correct');
    this.regData.emit({name:this.name, age:this.age});
    this.name='';
    this.age=0;
  } else {
    console.log('Name is incorrect');
  }}
}
