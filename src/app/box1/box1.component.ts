import { Component } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component {
  elementoSelezionato(evt: any) {
    console.log(`selezionato = ${this.array[evt.target?.selectedIndex]}`);
  }
  array = ["rosso", "giallo", "verde", "blu", "arancio","celeste"];
}
