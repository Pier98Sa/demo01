import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css'],
})
export class C1Component {

  messaggio = "Ciao Angular";
  provaVar = "Contenuto dell'input";
  state = true;

  constructor() {
    console.log('Il componente è stato creato dal runtime Angular');
  }

  ngOnInit(){
    console.log('Il componente è stato inizializzato dal runtime Angular');
  }

  ngOnDestroy(){
    console.log('Il componente è stato distrutto dal runtime Angular');
  }

  clickHandler(event : any){

    const labelDelBottone = event?.target.value;
    console.log(labelDelBottone);
    this.messaggio = "Premuto bottone";
    this.provaVar =(this.state) ?  this.provaVar.toLowerCase() : this.provaVar.toUpperCase();
    this.state = !this.state;
  }
}
