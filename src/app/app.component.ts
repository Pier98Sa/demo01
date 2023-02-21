import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo01';

  flag = true; //se true display di box 1 se false display di box 2

  invertiDisplay(){
    this.flag = !this.flag;
  }
}
