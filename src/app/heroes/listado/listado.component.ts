import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor', 'Capitan América']
  heroeBorrado: string = '';

  borrarHeroe(){ 
    this.heroeBorrado = this.heroes.shift() || ''; // el operador || significa que puede regresarme el nombre de un heroe o un string vacio
  }

}
