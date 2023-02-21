import { Component } from '@angular/core';
import { Car } from "../classi";

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component {
  x : Car = new Car("ax435", "Fiat", 500);
  y = new Car("zz678", "Ferrari Portofino", 300);
}
