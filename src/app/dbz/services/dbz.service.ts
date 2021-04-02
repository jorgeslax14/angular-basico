import { Injectable } from "@angular/core";
import { Personaje } from '../Interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _arrayPeronaje: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 6000
        }
      ];

    get personajes(): Personaje[]{
        return [...this._arrayPeronaje];
    }

    constructor(){
        console.log('Servicio inicializado..');
    }

    agregarPersonaje(personaje:Personaje){
        this._arrayPeronaje.push(personaje) ;
    }

}