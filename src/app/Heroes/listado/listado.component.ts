import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Capitan America','Thor','Hulk','Iroman','spiderman'];
  heroesborrado: string = '';
 

  borrarHeroe(): void{

    this.heroesborrado = this.heroes.shift() || ''; 
  }
  
}
