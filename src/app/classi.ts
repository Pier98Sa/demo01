export class Car{
  plate: string;
  brand: string;
  displacement: number;
  constructor(plate: string, brand: string, displacement: number){
    this.plate = plate;
    this.brand = brand;
    this.displacement = displacement;
  }
  // si può usare la toString fatta a mano ma meglio usare il JSON per mostrare i dati
  toString() : string{
    return `[Car { plate: ${this.plate} brand: ${this.brand} displacement: ${this.displacement}  }]`;
  }
}
