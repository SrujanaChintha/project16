import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 @Input() name:any
@Input()
submit():any{
  console.log(this.name)
}
 
 }
 
 

