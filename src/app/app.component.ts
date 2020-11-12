import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  number = '1';

  // Array de datos utilizado para el ejemplo de ngFor
  items = ['Elon', 'Tyrell', 'Eliot'];

  // Método para agregar un nuevo nombre a la lista items
  addItem() {
    this.items.push('Nuevo nombre');
  }

  // Se define una función para eliminar un nombre de la lista,
  // tipando el parámetro de nombre index como tipo number
  deleteItem(index: number) {

    console.log('Se borró ' + index);

    this.items.splice(index, 1);

  }

}
