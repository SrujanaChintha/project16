import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Output() name  = new EventEmitter()
  sendtoparent(){
    this.name.emit("welcome to srujana's world")
  }


}
