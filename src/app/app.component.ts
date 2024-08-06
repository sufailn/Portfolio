import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navNumber=4




  showNavOneContent(){
    this.navNumber=1
  }
  showNavTwoContent(){

    this.navNumber=2
  }
  showNavThreeContent(){
    this.navNumber=3

  }
  showNavFourContent(){
    this.navNumber=4

  }
}
