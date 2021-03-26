import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `    
    <h2>{{titulo}}</h2>
    <h3>La base es: <strong>{{base}}</strong></h3>
    
    <button (click)="sumar(base)"> + {{base}} </button>
    
    <span> {{numero}} </span>
    
    <button (click)="resta(base)">   - {{base}} </button>
    
    `
})
export class ContadorComponent {
    
    public titulo: string = 'Contador APP';
    numero: number = 10;
    base: number = 5;

    sumar(valor: number) {
        this.numero += this.base;
    }

    resta(valor: number) {
        this.numero -= this.base;
    }

}