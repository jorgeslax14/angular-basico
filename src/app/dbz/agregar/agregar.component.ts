import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder : 0 
  }

  constructor(private dbzService:DbzService){ }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

  //  console.log(this.nuevoPersonaje);
    this.dbzService.agregarPersonaje(this.nuevoPersonaje);

    //this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }

    //console.log(this.arrayPeronaje);
  }

}
