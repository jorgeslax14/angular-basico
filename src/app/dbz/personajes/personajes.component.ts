import { Component, Input } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private dbzService:DbzService){ 

  }

  //@Input() arrayPeronaje: Personaje[] = [];
  get arrayPersonaje(){
    return this.dbzService.personajes;
  }

  

}
