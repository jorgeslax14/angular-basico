import { Component} from '@angular/core';

interface Personaje{
  nombre:string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  arrayPeronaje: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 6000
    }
  ];

  nuevoPersonaje: Personaje = {
    nombre: '',
    poder : 0 
  }

  agregar(){
    console.log(this.nuevoPersonaje);

    this.arrayPeronaje.push(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }

}
