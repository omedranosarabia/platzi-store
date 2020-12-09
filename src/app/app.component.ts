import { Component } from '@angular/core';

// Importación del modelo 'Product'
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';
  number = '1';
  nombre = 'Omar';

  // Array de datos utilizado para el ejemplo de ngFor
  items = ['Elon', 'Tyrell', 'Eliot'];


  // Array de productos

  // Las iteraciones sólo pueden ser hechas sobre arrays
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Playera 1',
      price: 250,
      description: 'Esta es la playera número 1'
    },
    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Playera 2',
      price: 350,
      description: 'Esta es la playera número 2'
    },
    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Playera 3',
      price: 230,
      description: 'Esta es la playera número 3'
    },
    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Playera 4',
      price: 235,
      description: 'Esta es la playera número 4'
    },
    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Playera 5',
      price: 320,
      description: 'Esta es la playera número 5'
    }

  ];

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

  // Función en donde se recibe la variable Output enviada desde product.component.ts
  recibirValorDeOutput(id: number){
    console.log('El ID del producto es: ' + id + ' Y esto se está imprimiendo desde el Padre');
  }

}
